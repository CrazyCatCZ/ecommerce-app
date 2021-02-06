import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";
import { BrowserRouter as Router } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

//const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URL = "http://127.0.0.1:8000";
const EXPIRES_IN_ONE_YEAR = 360;

const checkSessionID = () => {
  const sessionID = Cookies.get("session-id");

  if (sessionID === undefined) {
    Cookies.set("session-id", uuidv4(), { expires: EXPIRES_IN_ONE_YEAR });
  }
};

const httpLink = createHttpLink({
  uri: `${BASE_URL}/graphql/`,
  credentials: "include",
});

// Access token is send through httponly cookie
const authLink = setContext((_, { headers }) => {
  // Get csrftoken from Cookies
  const csrftoken = Cookies.get("csrftoken");
  checkSessionID();

  // Return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      "X-CSRFToken": csrftoken,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          userOrders: {
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  }),
});

ReactDOM.render(
  <>
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  </>,
  document.getElementById("root")
);

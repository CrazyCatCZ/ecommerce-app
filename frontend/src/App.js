import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Switch, Route } from "react-router-dom";
import { USER_ME_QUERY } from "./components/Api/user";

import Navbar from "./components/Navbar/Navbar";
import MainContent from "./components/MainContent/MainContent";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import Checkout from "./components/Payment/Checkout";
import Message from "./components/Payment/Message";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const { data: meQuery, loading } = useQuery(USER_ME_QUERY, {
    fetchPolicy: "network-only",
  });

  // Set user to memory
  useEffect(() => {
    if (meQuery && meQuery.me) {
      setUser(meQuery.me.username);
    }
  }, [meQuery]);

  console.log(user);

  return (
    <div>
      <main>
        {loading === false ? (
          <>
            <Navbar user={user} />
            <Switch>
              <Route path="/checkout" component={Checkout} />
              <Route path="/order-summary" component={OrderSummary} />
              <Route path="/product/:id" component={ProductDetail} />
              <Route path="/login" component={() => <Login user={user} />} />
              <Route
                path="/register"
                component={() => <Register user={user} />}
              />
              <Route path="/">
                <>
                  <Message />
                  <MainContent />
                </>
              </Route>
            </Switch>
          </>
        ) : null}
      </main>
    </div>
  );
}

export default App;

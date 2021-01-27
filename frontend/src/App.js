import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Switch, Route } from "react-router-dom";
import { USER_ME_QUERY } from "./components/Api/user";

import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Copyright from "./components/Copyright";
import Pagination from "./components/Pagination";
import ProductDetail from "./components/ProductDetail";
import OrderSummary from "./components/OrderSummary";
import Checkout from "./components/Checkout";
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

  return (
    <div>
      <main>
        {user && loading === false ? (
          <>
            <Navbar />
            <Switch>
              <Route path="/checkout" component={Checkout} />
              <Route path="/order-summary" component={OrderSummary} />
              <Route path="/product/:id" component={ProductDetail} />
              <Route path="/">
                <>
                  <MainContent />
                  <Pagination />
                  <Copyright />
                </>
              </Route>
            </Switch>
          </>
        ) : (
          <>
            {loading === false ? (
              <Switch>
                <Route path="/register" component={Register} />
                <Route path="/" component={Login} />
              </Switch>
            ) : null}
          </>
        )}
      </main>
    </div>
  );
}

export default App;

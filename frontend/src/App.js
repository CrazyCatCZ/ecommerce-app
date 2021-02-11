import React, { useState, useEffect, useMemo } from "react";
import { useQuery } from "@apollo/client";
import { Switch, Route } from "react-router-dom";
import { USER_ME_QUERY } from "./components/Api/user";
import { UserContext } from "./components/Context/UserContext";
import PrivateRoute from "./components/PrivateRoute";

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
  const [user, setUser] = useState("admin");
  const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);
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
        {loading === false ? (
          <UserContext.Provider value={userValue}>
            <Navbar />
            <Switch>
              <PrivateRoute path="/checkout" component={Checkout} />
              <Route path="/order-summary" component={OrderSummary} />
              <Route path="/product/:id" component={ProductDetail} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/">
                <>
                  <Message />
                  <MainContent />
                </>
              </Route>
            </Switch>
          </UserContext.Provider>
        ) : null}
      </main>
    </div>
  );
}

export default App;

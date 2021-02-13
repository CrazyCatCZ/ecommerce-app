import React, { useState, useEffect, useMemo, lazy, Suspense } from "react";
import { useQuery } from "@apollo/client";
import { Switch, Route } from "react-router-dom";
import { USER_ME_QUERY } from "./components/Api/resolvers/user";
import { UserContext } from "./components/Context/UserContext";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
const MainContent = lazy(() => import("./components/MainContent/MainContent"));
const ProductDetail = lazy(() =>
  import("./components/ProductDetail/ProductDetail")
);
const OrderSummary = lazy(() =>
  import("./components/OrderSummary/OrderSummary")
);
const Checkout = lazy(() => import("./components/Payment/Checkout"));
const Message = lazy(() => import("./components/Payment/Message"));
const Login = lazy(() => import("./components/Authentication/Login"));
const Register = lazy(() => import("./components/Authentication/Register"));

function App() {
  const [user, setUser] = useState(null);
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
            <Suspense fallback={<div>Loading...</div>}>
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
            </Suspense>
          </UserContext.Provider>
        ) : null}
      </main>
    </div>
  );
}

export default App;

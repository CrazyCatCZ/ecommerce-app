import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "./Context/UserContext";

const PrivateRoute = ({ component: Component }) => {
  const { user } = useContext(UserContext);

  return (
    <Route render={() => (user ? <Component /> : <Redirect to="/login" />)} />
  );
};

export default PrivateRoute;

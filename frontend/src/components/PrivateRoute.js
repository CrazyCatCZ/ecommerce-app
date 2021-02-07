import React, { useState, useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "./Context/UserContext";

const PrivateRoute = ({ component: Component }) => {
  const [allow, setAllow] = useState(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    setAllow(true);
  }, []);

  return (
    <>
      {allow ? (
        <Route
          render={() => (user ? <Component /> : <Redirect to="/login" />)}
        />
      ) : null}
    </>
  );
};

export default PrivateRoute;

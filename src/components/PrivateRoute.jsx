import React, { useEffect } from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      return <Navigate to='login' />;
    }
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("user") ? (
          <Component {...props} />
        ) : (
          <Navigate to='descargas' />
        )
      }
    />
  );
};

export default PrivateRoute;

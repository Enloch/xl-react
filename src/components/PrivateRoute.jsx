// credits :https://medium.com/@dennisivy/creating-protected-routes-with-react-router-v6-2c4bbaf7bc1c

import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      return <Navigate to='bath/login' />;
    }
  }, []);

  return localStorage.getItem("user") ? <Outlet /> : <Navigate to='bath/login' />;
};

export default PrivateRoute;

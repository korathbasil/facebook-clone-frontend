import React from "react";
import { Route } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  return <Route />;
}

export default PrivateRoute;

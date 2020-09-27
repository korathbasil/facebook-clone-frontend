import React from "react";
import { Route, Redirect } from "react-router-dom";
import useStateContext from "./context/DataLayer";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const [{ token }, dispatch] = useStateContext();
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        token ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to="/account/login" />
        )
      }
    />
  );
};

export default PrivateRoute;

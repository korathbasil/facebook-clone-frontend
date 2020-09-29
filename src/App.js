import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MainBody from "./components/MainBody/MainBody";
import Login from "./components/Login/Login";
import PrivateRoute from "./PrivateRoute";
import useStateContext from "./context/DataLayer";
import Loading from "./components/Loadings/Loading";
import openSocket from "socket.io-client";

function App() {
  const [{ token, isLoading }, dispatch] = useStateContext();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      const tokenFromStorage = localStorage.getItem("token");
      console.log(tokenFromStorage);
      dispatch({
        type: "SET_TOKEN",
        token: tokenFromStorage,
        isLoading: false,
      });
    }
  }, []);
  useEffect(() => {
    openSocket("http://localhost:8000");
  }, []);
  console.log(token);
  return (
    <div className="App">
      <Router>
        <Switch>
          {isLoading && <Loading />}
          {!isLoading && (
            <Route exact path="/account/login" component={Login} />
          )}
          {!isLoading && <PrivateRoute path="/" component={MainBody} />}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

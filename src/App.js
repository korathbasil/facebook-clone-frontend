import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MainBody from "./components/MainBody/MainBody";
import Login from "./components/Login/Login";
import PrivateRoute from "./PrivateRoute";
import useStateContext from "./context/DataLayer";
import Loading from "./components/Loadings/Loading";
import openSocket from "socket.io-client";
import axios from "./axios";

function App() {
  const [{ token, user, isLoading }, dispatch] = useStateContext();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      const tokenFromStorage = localStorage.getItem("token");
      console.log(tokenFromStorage);
      axios
        .get("/auth/validate", {
          headers: {
            "auth-token": tokenFromStorage,
          },
        })
        .then((result) => {
          console.log(result);
          dispatch({
            type: "SET_USER",
            user: result.data,
          });
          dispatch({
            type: "SET_TOKEN",
            token: tokenFromStorage,
            isLoading: false,
          });
          console.log(result);
        })
        .catch((e) => console.log(e));
    }
  }, []);
  useEffect(() => {
    openSocket("http://localhost:8000");
  }, []);
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

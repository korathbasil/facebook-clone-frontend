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
import Axios from "axios";

function App() {
  const [{ token, user, isLoading }, dispatch] = useStateContext();
  useEffect(() => {
    let source = Axios.CancelToken.source();
    if (localStorage.getItem("token")) {
      const tokenFromStorage = localStorage.getItem("token");

      axios
        .get("/auth/validate", {
          headers: {
            "auth-token": tokenFromStorage,
          },
          cancelToken: source.token,
        })
        .then((result) => {
          console.log(result);
          dispatch({
            type: "SET_USER",
          });
          dispatch({
            type: "SET_TOKEN",
            token: tokenFromStorage,
            isLoading: false,
          });
          console.log(result);
        })
        .catch((e) => {
          dispatch({
            type: "SET_LOADING",
            isLoading: false,
          });
        });
      return () => {
        source.cancel();
      };
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

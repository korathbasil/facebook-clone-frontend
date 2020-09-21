import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MainBody from "./components/MainBody/MainBody";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/account/login" component={Login} />
          <Route exact path="/" component={MainBody} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

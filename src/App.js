import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MainBody from "./components/MainBody/MainBody";
import Login from "./components/Login/Login";
import { DataLayer } from "./context/DataLayer";
import { initialState, reducer } from "./context/reducer";

function App() {
  return (
    <div className="App">
      <DataLayer initialState={initialState} reducer={reducer}>
        <Router>
          <Switch>
            <Route exact path="/account/login" component={Login} />
            <Route path="/" component={MainBody} />
          </Switch>
        </Router>
      </DataLayer>
    </div>
  );
}

export default App;

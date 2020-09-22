import React from "react";
import { Route, Switch } from "react-router-dom";
import "./MainBody.css";
import Header from "../Header/Header";
import Home from "./Home/Home";
import Watch from "./Watch/Watch";

function MainBody() {
  return (
    <div className="mainBody">
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/watch" component={Watch} />
      </Switch>
    </div>
  );
}

export default MainBody;

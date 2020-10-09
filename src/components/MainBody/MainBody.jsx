import React from "react";
import { Route, Switch } from "react-router-dom";
import "./MainBody.css";
import Header from "../Header/Header";
import Home from "./Home/Home";
import Watch from "./Watch/Watch";
import Friends from "./Friends/Friends";
import Profile from "./Profile/Profile";

function MainBody() {
  return (
    <div className="mainBody">
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/watch" component={Watch} />
        <Route exact path="/friends" component={Friends} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default MainBody;

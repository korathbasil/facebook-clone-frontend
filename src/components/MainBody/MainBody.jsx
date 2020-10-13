import React from "react";
import { Route, Switch } from "react-router-dom";
import "./MainBody.css";
import Home from "./Home/Home";
import Watch from "./Watch/Watch";
import Friends from "./Friends/Friends";
import MyProfile from "./MyProfile/MyProfile";

function MainBody() {
  return (
    <div className="mainBody">
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/watch" component={Watch} />
        <Route exact path="/friends" component={Friends} />
        <Route exact path="/profile" component={MyProfile} />
      </Switch>
    </div>
  );
}

export default MainBody;

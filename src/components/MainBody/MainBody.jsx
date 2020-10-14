import React from "react";
import { Route, Switch } from "react-router-dom";
import "./MainBody.css";
import Home from "./Home/Home";
import Watch from "./Watch/Watch";
import Friends from "./Friends/Friends";
import MyProfile from "./MyProfile/MyProfile";
import Chat from "./Chat/Chat";
import ChatBubble from "./Chat/ChatBubble/ChatBubble";

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
      <div className="mainBody__chatBubblesContainer">
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
      </div>
      <Chat />
    </div>
  );
}

export default MainBody;

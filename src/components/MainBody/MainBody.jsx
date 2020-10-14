import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./MainBody.css";
import Home from "./Home/Home";
import Watch from "./Watch/Watch";
import Friends from "./Friends/Friends";
import MyProfile from "./MyProfile/MyProfile";
import Chat from "./Chat/Chat";
import ChatBubble from "./Chat/ChatBubble/ChatBubble";
import useStateContext from "../../context/DataLayer";

function MainBody() {
  const [{ chatBoxOpen }, dispatch] = useStateContext();
  return (
    <div className="mainBody">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/watch" component={Watch} />
        <Route exact path="/friends" component={Friends} />
        <Route exact path="/profile" component={MyProfile} />
      </Switch>
      <div className="mainBody__chatBubblesContainer">
        <ChatBubble />
      </div>
      {chatBoxOpen && <Chat />}
    </div>
  );
}

export default MainBody;

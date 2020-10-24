import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./MainBody.css";
import getSocket from "../../socket";
import Home from "./Home/Home";
import Watch from "./Watch/Watch";
import Friends from "./Friends/Friends";
import MyProfile from "./MyProfile/MyProfile";
import UserProfile from "./UserProfile/UserProfile";
import Chat from "./Chat/Chat";
import ChatBubble from "./Chat/ChatBubble/ChatBubble";
import useStateContext from "../../context/DataLayer";
import axios from "../../axios";
import Axios from "axios";

function MainBody() {
  const [{ chatBoxOpen, user }, dispatch] = useStateContext();

  useEffect(() => {
    getSocket().on("new-user-login", (data) => {
      getSocket().emit("join-to-new-user", data);
    });
    getSocket().on("new-post", (data) => {
      dispatch({
        type: "ADD_POST",
        post: data.post,
      });
    });
  }, []);

  useEffect(() => {
    const source = Axios.CancelToken.source();
    if (user.chats.length != 0) {
      axios
        .post("/chat/getChats", {
          chatIds: user?.chats,
          userId: user?.id,
        })
        .then((result) => {
          console.log(result);
          dispatch({
            type: "SET_CHATS",
            chats: result.data,
          });
        })
        .catch((e) => console.log(e));
    }

    return () => source.cancel();
  }, []);

  return (
    <div className="mainBody">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/watch" component={Watch} />
        <Route exact path="/friends" component={Friends} />
        <Route exact path="/profile" component={MyProfile} />
        <Route exact path="/user/:userId" component={UserProfile} />
      </Switch>
      <div className="mainBody__chatBubblesContainer">
        <ChatBubble />
      </div>
      {chatBoxOpen && <Chat />}
    </div>
  );
}

export default MainBody;

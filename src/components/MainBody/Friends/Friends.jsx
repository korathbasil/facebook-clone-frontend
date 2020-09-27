import React from "react";
import "./Friends.css";
import "./FriendNameCard/FriendNameCard";
import FriendNameCard from "./FriendNameCard/FriendNameCard";
import BG from "./bg.svg";

function Friends() {
  return (
    <div className="friends">
      <div className="friends__sidebar">
        <div className="friends__sidebarHeader">
          <h2>Friends</h2>
        </div>
        <div className="friends__sidebarReqInfoContainer">
          <h4>9 requests</h4>
          <p>View sent requests</p>
        </div>
        <div className="friends__sidebarReqContainer">
          <FriendNameCard />
          <FriendNameCard />
          <FriendNameCard />
        </div>
        <div className="friends__sidebarPeopleLists">
          <h3>People you may know</h3>
          <FriendNameCard />
          <FriendNameCard />
          <FriendNameCard />
        </div>
      </div>
      <div className="friends__main">
        <div className="friends__mainDummy">
          <img src={BG} alt="" />
          <h3>Select people names to preview thir profile</h3>
        </div>
      </div>
    </div>
  );
}

export default Friends;

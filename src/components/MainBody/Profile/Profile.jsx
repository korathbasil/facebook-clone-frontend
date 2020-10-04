import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./Profile.css";
import Timeline from "./Timeline/Timeline";
import ProfileFriends from "./ProfileFriends/ProfileFriends";
import useStateContext from "../../../context/DataLayer";
import axios from "../../../axios";
import FriendCard from "./FriendCard/FriendCard";
import FriendNameCard from "../Friends/FriendNameCard/FriendNameCard";
import Post from "../Home/Feed/Post/Post";

function Profile() {
  const [{ user }, dispatch] = useStateContext();
  const [activeTab, setActiveTab] = useState("timeline");
  const [photos, setPhotos] = useState([
    {
      src: "https://www.kidzvalley.in/storage/2020/05/71hn7-p46L._SL1500_.jpg",
    },
    {
      src: "https://www.kidzvalley.in/storage/2020/05/71hn7-p46L._SL1500_.jpg",
    },
    {
      src: "https://www.kidzvalley.in/storage/2020/05/71hn7-p46L._SL1500_.jpg",
    },
    {
      src: "https://www.kidzvalley.in/storage/2020/05/71hn7-p46L._SL1500_.jpg",
    },
    {
      src: "https://www.kidzvalley.in/storage/2020/05/71hn7-p46L._SL1500_.jpg",
    },
    {
      src: "https://www.kidzvalley.in/storage/2020/05/71hn7-p46L._SL1500_.jpg",
    },
    {
      src: "https://www.kidzvalley.in/storage/2020/05/71hn7-p46L._SL1500_.jpg",
    },
    {
      src: "https://www.kidzvalley.in/storage/2020/05/71hn7-p46L._SL1500_.jpg",
    },
  ]);
  // useEffect(() => {
  //   axios
  //     .post("/user", {
  //       userId: "5f6f96ea8dd3c43481265222",
  //     })
  //     .then((user) => {
  //       setUser(user.data);
  //     });
  // }, []);
  console.log(user);
  return (
    <div className="profile">
      <div className="profile__header">
        <div className="profile__headerContainer">
          <img
            src="https://cdn.pixabay.com/photo/2012/08/27/14/19/evening-55067__340.png"
            alt=""
            className="profile__headerCover"
          />
          <div className="profile__headerBottom">
            <div className="profile__headerBottomNames">
              <h2>{user.displayName}</h2>
              <p>To capture the world</p>
            </div>
            <div className="profile__headerBottomMenu">
              <div className="profile__headerBottomMenuLeft">
                <Link to="/myProfile">
                  <div className="profile__headerBottomMenuOption">
                    <p>Timeline</p>
                  </div>
                </Link>
                <div className="profile__headerBottomMenuOption">
                  <p>About</p>
                </div>
                <Link to="/myProfile/friends">
                  <div className="profile__headerBottomMenuOption">
                    <p>Friends</p>
                  </div>
                </Link>
                <div className="profile__headerBottomMenuOption">
                  <p>Photos</p>
                </div>
                <div className="profile__headerBottomMenuOption">
                  <p>Archive</p>
                </div>
                <div className="profile__headerBottomMenuOption">
                  <p>Videos</p>
                </div>
                <div className="profile__headerBottomMenuOption">
                  <p>More</p>
                </div>
              </div>
              <div className="profile__headerBottomMenuRight"></div>
            </div>
          </div>
          <img
            className="profile__headerProfilePicture"
            src="https://i.pinimg.com/originals/64/67/39/6467390a1afd37ab5e1932b2019a2287.jpg"
            alt=""
          />
        </div>
      </div>
      <Switch>
        <Route path="/myProfile">
          <Timeline photos={photos} />
        </Route>
        <Route path="/myProfile/friends">
          <ProfileFriends />
        </Route>
      </Switch>
    </div>
  );
}

export default Profile;

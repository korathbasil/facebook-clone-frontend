import React, { useState, useEffect, useRef } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./Profile.css";
import Timeline from "./Timeline/Timeline";
import About from "./About/About";
import Photos from "./Photos/Photos";
import ProfileFriends from "./ProfileFriends/ProfileFriends";
import useStateContext from "../../../context/DataLayer";
import FriendCard from "./FriendCard/FriendCard";
import FriendNameCard from "../Friends/FriendNameCard/FriendNameCard";
import Post from "../Home/Feed/Post/Post";
import Avatar from "@material-ui/core/Avatar";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import EditIcon from "@material-ui/icons/Edit";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

function Profile({ ownAccount }) {
  const timeline = useRef();
  const [{ selectedUser }, dispatch] = useStateContext();

  const [activeTab, setActiveTab] = useState("timeline");

  // console.log(user);
  return (
    <div className="profile">
      <div className="profile__header">
        <div className="profile__headerContainer">
          <div className="profile__headerCover">
            {selectedUser?.coverPicture?.coverPictureUrl != "" && (
              <img
                src={selectedUser?.coverPicture?.coverPictureUrl}
                alt=""
                className="profile__headerCoverImage"
              />
            )}
            {ownAccount && (
              <div
                onClick={() => {
                  dispatch({
                    type: "SET_IMAGE_UPLOAD_MODAL",
                    modal: "coverPicture",
                  });
                }}
                className="profile__headerCoverButton"
              >
                <CameraAltIcon />
                <p>Edit cover photo</p>
              </div>
            )}
          </div>

          <div className="profile__headerBottom">
            <div className="profile__headerBottomNames">
              <h2>{selectedUser?.displayName}</h2>
              <p>To capture the world</p>
            </div>
            <div className="profile__headerBottomMenu">
              <div className="profile__headerBottomMenuLeft">
                <div
                  onClick={() => {
                    setActiveTab("timeline");
                  }}
                  className={`profile__headerBottomMenuOption  ${
                    activeTab === "timeline" ? "activeTab" : ""
                  }`}
                >
                  <p>Timeline</p>
                </div>
                <div
                  onClick={() => {
                    setActiveTab("about");
                  }}
                  className={`profile__headerBottomMenuOption  ${
                    activeTab === "about" ? "activeTab" : ""
                  }`}
                >
                  <p>About</p>
                </div>
                <div
                  onClick={() => {
                    setActiveTab("friends");
                  }}
                  className={`profile__headerBottomMenuOption  ${
                    activeTab === "friends" ? "activeTab" : ""
                  }`}
                >
                  <p>Friends</p>
                </div>
                <div
                  onClick={() => {
                    setActiveTab("photos");
                  }}
                  className={`profile__headerBottomMenuOption  ${
                    activeTab === "photos" ? "activeTab" : ""
                  }`}
                >
                  <p>Photos</p>
                </div>
                {/* <div
                  onClick={() => {
                    setActiveTab("archive");
                  }}
                  className={`profile__headerBottomMenuOption  ${
                    activeTab === "archive" ? "activeTab" : ""
                  }`}
                >
                  <p>Archive</p>
                </div> */}
                {/* <div
                  onClick={() => {
                    setActiveTab("videos");
                  }}
                  className={`profile__headerBottomMenuOption  ${
                    activeTab === "videos" ? "activeTab" : ""
                  }`}
                >
                  <p>Videos</p>
                </div> */}
                {/* <div
                  onClick={() => {
                    setActiveTab("more");
                  }}
                  className={`profile__headerBottomMenuOption  ${
                    activeTab === "more" ? "activeTab" : ""
                  }`}
                >
                  <p>More</p>
                </div> */}
              </div>
              <div className="profile__headerBottomMenuRight">
                {ownAccount && (
                  <div className="profile__headerBottomMenuRightOwn">
                    <div className="profile__headerBottomMenuRightEdit">
                      <EditIcon />
                      <p>Edit profile</p>
                    </div>
                  </div>
                )}
                {!ownAccount && (
                  <div className="profile__headerBottomMenuRightOthers">
                    <div className="profile__headerBottomMenuRightAddFriend">
                      <PersonAddIcon />
                      <p>Add friend</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* <img
            className="profile__headerProfilePicture"
            src="https://i.pinimg.com/originals/64/67/39/6467390a1afd37ab5e1932b2019a2287.jpg"
            alt=""
          /> */}
          <div className="profile__headerProfilePicture">
            <Avatar
              src={selectedUser?.profilePicture?.profilePictureUrl}
              style={{ width: 190, height: 190 }}
            />
            {ownAccount && (
              <div
                onClick={() => {
                  dispatch({
                    type: "SET_IMAGE_UPLOAD_MODAL",
                    modal: "profilePicture",
                  });
                }}
                className="profile__headerProfilePictureButton"
              >
                <CameraAltIcon />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="profile__bottomBody">
        {activeTab === "timeline" && <Timeline ownAccount={ownAccount} />}
        {activeTab === "about" && <About />}
        {activeTab === "friends" && <ProfileFriends />}
        {activeTab === "photos" && <Photos />}
      </div>
    </div>
  );
}

export default Profile;

import React, { useState, useEffect } from "react";
import "./Profile.css";
import axios from "../../../axios";

function Profile() {
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .post("/user", {
        userId: "5f6f96ea8dd3c43481265222",
      })
      .then((user) => {
        setUser(user.data);
      });
  }, []);
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
              <h2>{user?.displayName}</h2>
              <p>To capture the world</p>
            </div>
            <div className="profile__headerBottomMenu">
              <div className="profile__headerBottomMenuLeft">
                <div className="profile__headerBottomMenuOption">
                  <p>Timeline</p>
                </div>
                <div className="profile__headerBottomMenuOption">
                  <p>About</p>
                </div>
                <div className="profile__headerBottomMenuOption">
                  <p>Friends</p>
                </div>
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
      <div className="profile__body">
        <div className="profile__bodycontainer">
          <div className="profile__bodyRequst">
            <div className="profile__bodyRequstLeft">
              <h3>Do you know David Beckham</h3>
            </div>
            <div className="profile__bodyRequstRight"></div>
          </div>
          <div className="profile__bodyBottom">
            <div className="profile__bodyBottomLeft">
              <h4>Left</h4>
            </div>
            <div className="profile__bodyBottomRight">
              <h4>Right</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

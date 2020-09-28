import React from "react";
import "./Profile.css";

function Profile() {
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
              <h2>Wayne Rooney</h2>
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
                  <p>Videos</p>
                </div>
                <div className="profile__headerBottomMenuOption">
                  <p>More</p>
                </div>
              </div>
              <div className="profile__headerBottomMenuRight"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

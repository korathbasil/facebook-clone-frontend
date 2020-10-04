import React from "react";
import "./Timeline.css";
import FriendCard from "../FriendCard/FriendCard";
import Post from "../../Home/Feed/Post/Post";
import Upload from "../../Home/Feed/Upload/Upload";

function Timeline({ photos }) {
  return (
    <div className="timeline">
      <div className="timeline__container">
        <div className="timeline__request">
          <div className="timeline__requestLeft">
            <h3>Do you know David Beckham</h3>
          </div>
          <div className="timeline__requestRight"></div>
        </div>
        <div className="timeline__bottom">
          <div className="timeline__bottomLeft">
            <div className="timeline__bottomPhotos">
              <div className="timeline__bottomPhotosTop">
                <h3>Photos</h3>
                <p>See all</p>
              </div>
              <div className="timeline__bottomPhotosContainer">
                {photos.map((photo) => {
                  return <img src={photo.src} alt="" />;
                })}

                <img
                  src="https://www.pandasecurity.com/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg"
                  alt=""
                />
                <img
                  src="https://www.pandasecurity.com/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg"
                  alt=""
                />
                <img
                  src="https://www.pandasecurity.com/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="timeline__bottomFriends">
              <h3>Friends</h3>
              <p>17 mutual Friends</p>
              <div className="timeline__bottomFriendsContainer">
                <FriendCard />
                <FriendCard />
                <FriendCard />
                <FriendCard />
                <FriendCard />
                <FriendCard />
                <FriendCard />
                <FriendCard />
              </div>
            </div>
          </div>
          <div className="timeline__bottomRight">
            <Upload />
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;

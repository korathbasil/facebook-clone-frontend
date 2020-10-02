import React from "react";
import "./Timeline.css";
import FriendCard from "../FriendCard/FriendCard";
import Post from "../../Home/Feed/Post/Post";

function Timeline({ photos }) {
  return (
    <div className="timeline">
      <div className="timeline__">
        <div className="timeline__container">
          <div className="timeline__Requst">
            <div className="timeline__RequstLeft">
              <h3>Do you know David Beckham</h3>
            </div>
            <div className="timeline__RequstRight"></div>
          </div>
          <div className="timeline__Bottom">
            <div className="timeline__BottomLeft">
              <div className="timeline__BottomPhotos">
                <div className="timeline__BottomPhotosTop">
                  <h3>Photos</h3>
                  <p>See all</p>
                </div>
                <div className="timeline__BottomPhotosContainer">
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
              <div className="timeline__BottomFriends">
                <h3>Friends</h3>
                <p>17 mutual Friends</p>
                <div className="timeline__BottomFriendsContainer">
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
            <div className="timeline__BottomRight">
              <Post />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;

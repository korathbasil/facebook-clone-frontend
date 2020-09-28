import React from "react";
import "./FriendCard.css";

function FriendCard() {
  return (
    <div className="friendCard">
      <div className="friendCard__profilePictureContainer">
        <img
          src="https://ofad.org/files/daily-photo/recent-and-random-portraits_8.jpg"
          alt=""
          className="friendCard__profilePicture"
        />
      </div>

      <p>John Lucas</p>
    </div>
  );
}

export default FriendCard;

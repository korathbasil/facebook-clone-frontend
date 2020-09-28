import React from "react";
import "./FriendCard.css";

function FriendCard() {
  return (
    <div className="friendCard">
      <img
        src="https://ofad.org/files/daily-photo/recent-and-random-portraits_8.jpg"
        alt=""
        className="friendCard__profilePicture"
      />
      <p>John Lucas</p>
    </div>
  );
}

export default FriendCard;

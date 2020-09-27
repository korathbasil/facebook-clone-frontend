import React from "react";
import "./FriendNameCard.css";
import Avatar from "@material-ui/core/Avatar";

function FriendNameCard() {
  return (
    <div className="friendNameCard">
      <Avatar style={{ width: 60, height: 60 }} />
      <div className="friendsnameCard__info">
        <h3>bazil Korath</h3>
        <p>20 mutual friends</p>
        <div className="friendsnameCard__buttonsContainer">
          <button className="friendsnameCard__firstButton">Confirm</button>
          <button className="friendsnameCard__secondButton">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default FriendNameCard;

import React from "react";
import "./StoryCard.css";
// Material Ui elements
import Avatar from "@material-ui/core/Avatar";

function StoryCard() {
  return (
    <div className="storyCard">
      <div className="storyCard__avatar">
        <Avatar />
      </div>
      <img
        src="https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
      <p>Bazil Korath</p>
    </div>
  );
}

export default StoryCard;

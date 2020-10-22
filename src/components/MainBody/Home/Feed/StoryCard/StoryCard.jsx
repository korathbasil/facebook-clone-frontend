import React from "react";
import "./StoryCard.css";
// Material Ui elements
import Avatar from "@material-ui/core/Avatar";

function StoryCard() {
  return (
    <div className="storyCard">
      <div className="storyCard__avatar">
        <Avatar src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9" />
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

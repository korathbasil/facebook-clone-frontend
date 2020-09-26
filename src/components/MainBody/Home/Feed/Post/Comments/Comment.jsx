import React from "react";
import "./Comment.css";
import Avatar from "@material-ui/core/Avatar";

function Comment({ content, displayName }) {
  return (
    <div className="comment">
      <Avatar />
      <div className="comment__container">
        <p>
          <strong>{displayName}</strong>
        </p>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Comment;

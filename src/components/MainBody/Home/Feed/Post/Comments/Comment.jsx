import React from "react";
import "./Comment.css";
import Avatar from "@material-ui/core/Avatar";

function Comment() {
  return (
    <div className="comment">
      <Avatar />
      <div className="comment__container">
        <p>
          <strong>Bazil Korath</strong>
        </p>
        <p>Hellooo guys how are youn doing ???</p>
      </div>
    </div>
  );
}

export default Comment;

import React from "react";
import "./PostComment.css";
import Avatar from "@material-ui/core/Avatar";

function PostComment() {
  const postComment = () => {};
  return (
    <div className="postComment">
      <Avatar />
      <div className="postComment__inputContainer">
        <form onSubmit={postComment}>
          <input type="text" placeholder="Write a comment..." />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default PostComment;

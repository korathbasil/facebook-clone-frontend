import React, { useState } from "react";
import "./PostComment.css";
import Avatar from "@material-ui/core/Avatar";
import axios from "../../../../../../axios";

function PostComment({ postId }) {
  const [postContennt, setPostContent] = useState("");
  const postComment = async (e) => {
    e.preventDefault();
    await axios
      .post("/post/comment", {
        postId: postId,
        userId: "5f6ddc123477b74423b58a57",
        displayName: "Cristiano Ronaldo",
        content: postContennt,
      })
      .then((result) => {
        alert(result.data.message);
        setPostContent("");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="postComment">
      <Avatar />
      <div className="postComment__inputContainer">
        <form onSubmit={postComment}>
          <input
            value={postContennt}
            onChange={(e) => setPostContent(e.target.value)}
            type="text"
            placeholder="Write a comment..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default PostComment;

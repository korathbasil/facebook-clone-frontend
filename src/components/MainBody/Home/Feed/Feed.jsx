import React from "react";
import "./Feed.css";
import Upload from "./Upload/Upload";
import Post from "./Post/Post";

function Feed() {
  return (
    <div className="feed">
      <Upload />
      <Post />
    </div>
  );
}

export default Feed;

import React, { useState, useEffect } from "react";
import "./Feed.css";
import Upload from "./Upload/Upload";
import Post from "./Post/Post";
import axios from "../../../../axios";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    try {
      const loadedPosts = await axios.get("/posts");
      setPosts(loadedPosts.data);
    } catch (error) {
      alert(error.message);
    }
  }, []);
  console.log(posts);
  return (
    <div className="feed">
      <Upload />
      {posts.map((post) => {
        return (
          <Post
            id={post._id}
            key={post._id}
            displayName={post.author?.displayName}
            avatar={post.author?.avatar}
            postCaption={post.caption}
            postImage={post.image}
            likesCount={post.likesCount}
            commentsCount={post.commentsCount}
            sharesCount={post.sharesCount}
            commentsDetails={post.comments}
          />
        );
      })}
      <Post />
    </div>
  );
}
export default Feed;

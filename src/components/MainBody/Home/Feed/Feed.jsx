import React, { useState, useEffect } from "react";
import "./Feed.css";
import Upload from "./Upload/Upload";
import Post from "./Post/Post";
import axios from "../../../../axios";
import Axios from "axios";
import useStateContext from "../../../../context/DataLayer";

function Feed({ overlayShowStatusHandler }) {
  const [{ token }, dispatch] = useStateContext();
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    let source = Axios.CancelToken.source();
    axios
      .get("/user/getFeed", {
        headers: {
          "auth-token": token,
        },
        cancelToken: source.token,
      })
      .then((result) => {
        console.log(result);
        setPosts(result.data);
        console.log(posts);
      })
      .catch((e) => console.log(e));
    return () => {
      source.cancel();
    };
  }, []);
  console.log(posts);
  return (
    <div className="feed">
      <Upload overlayShowStatusHandler={overlayShowStatusHandler} />
      {posts.map((post) => {
        return (
          <Post
            id={post._id}
            key={post._id}
            displayName={post.authorId?.displayName}
            avatar={post.authorId?.profilePicture?.profilePictureUrl}
            postCaption={post.caption}
            postImage={post.image?.medium}
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

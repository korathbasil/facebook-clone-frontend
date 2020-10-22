import React, { useState, useEffect } from "react";
import "./Feed.css";
import Upload from "./Upload/Upload";
import Post from "./Post/Post";
import axios from "../../../../axios";
import Axios from "axios";
import useStateContext from "../../../../context/DataLayer";
import StoryCard from "./StoryCard/StoryCard";

function Feed({ overlayShowStatusHandler }) {
  const [{ token, posts }, dispatch] = useStateContext();

  useEffect(() => {
    let source = Axios.CancelToken.source();
    axios
      .get("/user/getFeed", {
        headers: {
          "auth-token": token,
        },
        cancelToken: source.token,
      })
      .then((result) => {
        dispatch({
          type: "SET_POSTS",
          posts: result.data,
        });
      })
      .catch((e) => console.log(e));
    return () => {
      source.cancel();
    };
  }, []);
  console.log(posts);
  return (
    <div className="feed">
      <div className="feed__stories">
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
      </div>
      <Upload overlayShowStatusHandler={overlayShowStatusHandler} />
      {posts?.map((post) => {
        return (
          <Post
            id={post._id}
            key={post._id}
            displayName={post.miniAuthorId?.displayName}
            avatar={post.miniAuthorId?.profilePicture?.profilePictureUrl}
            postCaption={post.caption}
            postImage={post.image?.medium}
            likesCount={post.likesCount}
            commentsCount={post.commentsCount}
            sharesCount={post.sharesCount}
            commentsDetails={post.comments}
          />
        );
      })}
    </div>
  );
}
export default Feed;

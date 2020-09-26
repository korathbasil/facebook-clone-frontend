import React, { useState } from "react";
import "./Post.css";
import axios from "../../../../../axios";
// Material UI elements
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Avatar from "@material-ui/core/Avatar";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import PostComment from "./Comments/PostComment";
import Comment from "./Comments/Comment";

function Post({
  id,
  displayName,
  avatar,
  postCaption,
  postImage,
  likesCount,
  commentsCount,
  sharesCount,
  commentsDetails,
}) {
  const [commentsShowStatus, setCommentsShowStatus] = useState(false);
  const [commentsCheckStatus, setCommentsCheckStatus] = useState(false);
  const [comments, setcomments] = useState([]);
  const showCommentsHandler = async () => {
    commentsShowStatus
      ? setCommentsShowStatus(false)
      : setCommentsShowStatus(true);

    if (setCommentsShowStatus) {
      if (!commentsCheckStatus) {
        console.log(commentsDetails);
        const commentIds = [];
        commentsDetails.forEach((commentsDetail) => {
          commentIds.push(commentsDetail.commentId);
        });
        console.log(commentIds);
        await axios
          .post("/post/comments", {
            commentIds: commentIds,
          })
          .then((loadedComments) => setcomments(loadedComments.data))
          .catch((e) => alert(e.message));
      }
    }
  };
  return (
    <div className="post">
      <div className="post__top">
        <div className="post__topHead">
          <div className="post__topHeadLeft">
            <Avatar src={avatar} />
            <div className="post__topHeadDtails">
              <h4 className="post__topHeadDisplayName">{displayName}</h4>
              <p className="post__topHeadTime">18:00</p>
            </div>
          </div>
          <div className="post__topHeadRight">
            <MoreHorizIcon />
          </div>
        </div>
        <div className="post__topText">
          <p>{postCaption}</p>
        </div>
      </div>
      <img className="post__Image" src={postImage} alt="" />
      <div className="post__bottom">
        <div className="post__bottomReactionsContainer">
          <div className="post__bottomReactionsLeft">
            <ThumbUpAltIcon />
            <p>{likesCount}</p>
          </div>
          <div className="post__bottomReactionsRight">
            <p
              onClick={showCommentsHandler}
              className="post__bottomReactionsComment"
            >
              {commentsCount} comments
            </p>
            <p>{sharesCount} shares</p>
          </div>
        </div>
        <div className="post__bottomActivity">
          <div className="post__bottomActivityButton">
            <ThumbUpAltOutlinedIcon />
            <p>Like</p>
          </div>
          <div className="post__bottomActivityButton">
            <ModeCommentOutlinedIcon />
            <p>Comment</p>
          </div>
          <div className="post__bottomActivityButton">
            <ShareOutlinedIcon />
            <p>Share</p>
          </div>
        </div>
      </div>
      {commentsShowStatus && (
        <div className="post__commentsContainer">
          <PostComment postId={id} />
          {comments.map((comment) => {
            return (
              <Comment
                displayName={comment.displayName}
                content={comment.content}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Post;

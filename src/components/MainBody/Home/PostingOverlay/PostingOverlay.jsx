import React from "react";
import "./PostingOverlay.css";
import Header from "../../../Header/Header";
import CloseIcon from "@material-ui/icons/Close";
import Avatar from "@material-ui/core/Avatar";

function PostingOverlay({ overlayShowStatusHandler }) {
  return (
    <div className="pip">
      <Header />
      <div className="pip__model">
        <div className="pip__top">
          <p>Create post</p>
          <div onClick={overlayShowStatusHandler} className="pip__topCloseIcon">
            <CloseIcon />
          </div>
        </div>
        <div className="pip__info">
          <Avatar />
          <p>Bazil Korath</p>
        </div>
        <textarea
          type="text"
          className="pip__postContent"
          placeholder="Whats on your mind, Bazil?"
        />
        <input type="text" placeholder="image" />
        {/* <input type="file" /> */}
      </div>
    </div>
  );
}

export default PostingOverlay;

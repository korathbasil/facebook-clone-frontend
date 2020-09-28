import React from "react";
import "./PostingOverlay.css";
import Header from "../../../Header/Header";
import CloseIcon from "@material-ui/icons/Close";

function PostingOverlay() {
  return (
    <div className="pip">
      <Header />
      <div className="pip__model">
        <div className="pip__top">
          <p>Create post</p>
          <div className="pip__topCloseIcon">
            <CloseIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostingOverlay;

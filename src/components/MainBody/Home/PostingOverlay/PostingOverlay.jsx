import React, { useState } from "react";
import "./PostingOverlay.css";
import Header from "../../../Header/Header";
import CloseIcon from "@material-ui/icons/Close";
import Avatar from "@material-ui/core/Avatar";
import axios from "../../../../axios";

function PostingOverlay({ overlayShowStatusHandler }) {
  const [image, setImage] = useState(null);
  const formData = new FormData();

  const selectFile = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      formData.append("image.png", image);
    }
  };
  const uploadFile = (e) => {
    e.preventDefault();
    axios
      .post("/testFile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => console.log(result))
      .catch((e) => console.log(e));
  };
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
        <form action="">
          <input type="file" onChange={selectFile} />
          <button onClick={uploadFile}>Upload</button>
        </form>
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

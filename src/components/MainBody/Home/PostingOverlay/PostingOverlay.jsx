import React, { useState, useRef } from "react";
import "./PostingOverlay.css";
import Header from "../../../Header/Header";
import Avatar from "@material-ui/core/Avatar";
import axios from "../../../../axios";
// Material Ui imports
import PhotoIcon from "@material-ui/icons/Photo";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import GifIcon from "@material-ui/icons/Gif";
import CloseIcon from "@material-ui/icons/Close";
import useStateContext from "../../../../context/DataLayer";

function PostingOverlay({ overlayShowStatusHandler }) {
  const [{ user }, dispatch] = useStateContext();
  const filePicker = useRef();
  const postButton = useRef();
  const [postText, setPostText] = useState("");
  const [image, setImage] = useState(null);
  const [imagePath, setImagePath] = useState(null);
  let formData = new FormData();
  const selectFile = (e) => {
    if (e.target.files[0]) {
      setImagePath(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0]);
      postButton.current.disabled = false;
    }
  };
  const removeSelectedImage = () => {
    setImage(null);
    setImagePath(null);
    filePicker.current.value = "";
    if (postText === "") {
      postButton.current.disabled = true;
    }
  };
  const uploadFile = (e) => {
    e.preventDefault();
    formData.append("image", image);
    formData.append("folder", "timelinePhotos");
    formData.append("userId", user?.id);
    formData.append("miniUserId", user?.miniUserId);
    formData.append("caption", postText);
    axios
      .post("/post/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => overlayShowStatusHandler())
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
          <Avatar
            src={user?.profilePicture?.profilePictureUrl}
            style={{ marginRight: 10 }}
          />
          <p>{user?.displayName}</p>
        </div>
        <form action="" onSubmit={uploadFile}>
          <textarea
            onChange={(e) => {
              setPostText(e.target.value);
              if (e.target.value === "" && filePicker.current.value === "") {
                postButton.current.disabled = true;
              } else {
                postButton.current.disabled = false;
              }
            }}
            value={postText}
            type="text"
            className="pip__postContent"
            placeholder={`Whats on your mind, ${
              user?.displayName.split(" ")[0]
            }?`}
          />
          <div className="pip__postAdd">
            <p>Add to your post</p>
            <div className="pip__postAddRight">
              <PhotoIcon
                onClick={() => document.getElementById("filePicker").click()}
                style={{ fontSize: 30, color: "green" }}
              />
              <PersonPinIcon style={{ fontSize: 30, color: "blue" }} />
              <InsertEmoticonIcon style={{ fontSize: 30, color: "yellow" }} />
              <LocationOnIcon style={{ fontSize: 30, color: "red" }} />
              <GifIcon style={{ fontSize: 30, color: "orange" }} />
            </div>
          </div>
          {imagePath && (
            <img className="pip__formSelectedImage" src={imagePath} />
          )}
          {imagePath && (
            <div
              onClick={removeSelectedImage}
              className="pip__formSelectedImageDelete"
            >
              <CloseIcon />
            </div>
          )}
          <input
            ref={filePicker}
            id="filePicker"
            type="file"
            onChange={selectFile}
            encType="multipart/form-data"
          />
          <button
            ref={postButton}
            disabled
            className="pip__formButton"
            type="submit"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostingOverlay;

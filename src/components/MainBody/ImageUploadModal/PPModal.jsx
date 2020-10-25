import React, { useRef, useState } from "react";
import "./PPModal.css";
import FBLoading from "../../FBLoading/FBLoading";
import Axios from "axios";
import axios from "../../../axios";
// Mterial UI elements
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import Avatar from "@material-ui/core/Avatar";
import useStateContext from "../../../context/DataLayer";

function PPModal() {
  const [saveLoadingStatus, setSaveLoadingStatus] = useState(false);
  const [{ user }, dispatch] = useStateContext();
  const fileInput = useRef();
  const formButton = useRef();
  const [image, setImage] = useState(null);
  const [imagePath, setImagePath] = useState(null);
  let formData = new FormData();

  const selectFile = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      setImagePath(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0]);
    }
  };

  const uploadProfilePicture = (e) => {
    e.preventDefault();
    formData.append("image", image);
    formData.append("folder", "profilePictures");
    formData.append("userId", user?.id);
    formData.append("miniUserId", user?.miniUserId);
    axios
      .post("user/profilePicture", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => {
        alert("uploaded");
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="PPM">
      <div className="PPM__header">
        <h3>Upload profile Picture</h3>
        <div
          onClick={() => {
            dispatch({
              type: "SET_IMAGE_UPLOAD_MODAL",
              modal: "",
            });
          }}
          className="PPM__headerIcon"
        >
          <CloseIcon />
        </div>
      </div>
      <div className="PPM__body">
        <div
          onClick={() => {
            fileInput.current.click();
          }}
          className="PPM__imageSelectButton"
        >
          <AddIcon />
          <h4>Upload photo</h4>
        </div>
        <div className="PPM__previewContainer">
          <Avatar src={imagePath} style={{ width: 300, height: 300 }} />
        </div>
        <form onSubmit={uploadProfilePicture}>
          <input
            ref={fileInput}
            type="file"
            onChange={selectFile}
            encType="multipart/form-data"
          />
          <button ref={formButton}>Upload</button>
          <div
            onClick={() => {
              formButton.current.click();
            }}
            className="PPM__formButton"
          >
            {saveLoadingStatus && <FBLoading col="white" len="30px" />}
            <p>Save</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PPModal;

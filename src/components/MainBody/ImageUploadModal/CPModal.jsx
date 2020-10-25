import React, { useState, useRef } from "react";
import "./CPModal.css";
import FBLoading from "../../FBLoading/FBLoading";
import axios from "../../../axios";
// Mterial UI elements
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import useStateContext from "../../../context/DataLayer";

function CPModal() {
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
  const uploadcoverPicture = (e) => {
    e.preventDefault();
    formData.append("image", image);
    formData.append("folder", "coverPictures");
    formData.append("userId", user?.id);
    formData.append("miniUserId", user?.miniUserId);
    axios
      .post("user/coverPicture", formData, {
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
    <div className="CPM">
      <div className="CPM__header">
        <h3>Upload profile Picture</h3>
        <div
          onClick={() => {
            dispatch({
              type: "SET_IMAGE_UPLOAD_MODAL",
              modal: "",
            });
          }}
          className="CPM__headerIcon"
        >
          <CloseIcon />
        </div>
      </div>
      <div className="CPM__body">
        <div
          onClick={() => {
            fileInput.current.click();
          }}
          className="CPM__imageSelectButton"
        >
          <AddIcon />
          <h4>Upload photo</h4>
        </div>
        <div className="CPM__previewContainer">
          <div className="CPM__previewImage">
            {imagePath != null && <img src={imagePath} alt="" />}
          </div>
        </div>
        <form onSubmit={uploadcoverPicture}>
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
            className="CPM__formButton"
          >
            {saveLoadingStatus && <FBLoading col="white" len="30px" />}
            <p>Save</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CPModal;

import React, { useState } from "react";
import "./PPModal.css";
import FBLoading from "../../FBLoading/FBLoading";
// Mterial UI elements
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import Avatar from "@material-ui/core/Avatar";
import useStateContext from "../../../context/DataLayer";

function PPModal() {
  const [saveLoadingStatus, setSaveLoadingStatus] = useState(false);
  const [{}, dispatch] = useStateContext();
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
        <div className="PPM__imageSelectButton">
          <AddIcon />
          <h4>Upload photo</h4>
        </div>
        <div className="PPM__previewContainer">
          <Avatar style={{ width: 300, height: 300 }} />
        </div>
        <form action="">
          <input type="file" name="" id="" />
          <button>Upload</button>
          <div className="PPM__formButton">
            {saveLoadingStatus && <FBLoading col="white" len="30px" />}
            <p>Save</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PPModal;

import React, { useState } from "react";
import "./CPModal.css";
import FBLoading from "../../FBLoading/FBLoading";
// Mterial UI elements
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import useStateContext from "../../../context/DataLayer";

function CPModal() {
  const [saveLoadingStatus, setSaveLoadingStatus] = useState(false);
  const [{}, dispatch] = useStateContext();
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
        <div className="CPM__imageSelectButton">
          <AddIcon />
          <h4>Upload photo</h4>
        </div>
        <div className="CPM__previewContainer">
          <div className="CPM__previewImage">
            <img src="" alt="" />
          </div>
        </div>
        <form action="">
          <input type="file" name="" id="" />
          <button>Upload</button>
          <div className="CPM__formButton">
            {saveLoadingStatus && <FBLoading col="white" len="30px" />}
            <p>Save</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CPModal;

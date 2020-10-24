import React from "react";
import "./AddModal.css";
// Material UI elements\
import CreateIcon from "@material-ui/icons/Create";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";

function AddModal() {
  return (
    <div className="addModal">
      <h2>Create</h2>
      <div className="addModal__item">
        <div className="addModal__itemIcon">
          <CreateIcon />
        </div>
        <div className="addModal__itemName">
          <p>Post</p>
          <p>Share a post on news feed</p>
        </div>
      </div>
      <div className="addModal__item">
        <div className="addModal__itemIcon">
          <ImportContactsIcon />
        </div>
        <div className="addModal__itemName">
          <p>Story</p>
          <p>Share a photo or whrite something</p>
        </div>
      </div>
    </div>
  );
}

export default AddModal;

import React from "react";
import "./ImageUploadModal.css";
import Header from "../../Header/Header";
import PPModal from "./PPModal";
import CPModal from "./CPModal";
import useStateContext from "../../../context/DataLayer";

function ImageUploadModal() {
  const [{ imageUploadModal }, dispatch] = useStateContext();
  return (
    <div className="IUM">
      <Header />
      <div className="IUM__body">
        <div className="IUM__modal">
          {imageUploadModal === "profilePicture" && <PPModal />}
          {imageUploadModal === "coverPicture" && <CPModal />}
        </div>
      </div>
    </div>
  );
}

export default ImageUploadModal;

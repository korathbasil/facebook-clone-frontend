import React from "react";
import "./ImageUploadModal.css";
import Header from "../../Header/Header";
import PPModal from "./PPModal";
import CPModal from "./CPModal";

function ImageUploadModal() {
  return (
    <div className="IUM">
      <Header />
      <div className="IUM__body">
        <div className="IUM__modal">
          <PPModal />
        </div>
      </div>
    </div>
  );
}

export default ImageUploadModal;

import React from "react";
import "./Loading.css";
import LoadingLogo from "./fb-loading-logo.png";

function Loading() {
  return (
    <div className="loading">
      <img src={LoadingLogo} alt="" />
    </div>
  );
}

export default Loading;

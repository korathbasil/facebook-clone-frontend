import React from "react";

function LoadingCircle() {
  return (
    <div className="loadingCircle">
      <svg className="loadingCircle__svg">
        <circle cx="30" cy="30" r="30"></circle>
      </svg>
    </div>
  );
}

export default LoadingCircle;

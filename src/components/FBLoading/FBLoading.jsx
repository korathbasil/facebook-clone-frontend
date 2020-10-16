import React, { useState } from "react";
import "./FBLoading.css";

function FBLoading({ col, len }) {
  return (
    <div className="FBLoading">
      <div className="FBLoading__box"></div>
      <div className="FBLoading__box"></div>
      <div className="FBLoading__box"></div>
      <style>{`
        .FBLoading {
          width: ${len};
          height: ${len};
        }
        .FBLoading__box {
          background-color: ${col};
        }
      `}</style>
    </div>
  );
}

export default FBLoading;

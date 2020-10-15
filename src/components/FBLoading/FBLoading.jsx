import React, { useState } from "react";
import "./FBLoading.css";

function FBLoading({ col, len }) {
  return (
    <div class="FBLoading">
      <div className="FBLoading__box"></div>
      <div className="FBLoading__box"></div>
      <div className="FBLoading__box"></div>
      <style jsx>{`
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

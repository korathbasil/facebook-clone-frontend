import React from "react";
import "./SidebarOptions.css";

function SidebarOptions({ Icon, name }) {
  return (
    <div className="sidebarOptions">
      <img src={Icon} alt="" className="sidebarOptions__icon" />
      <p>{name}</p>
    </div>
  );
}

export default SidebarOptions;

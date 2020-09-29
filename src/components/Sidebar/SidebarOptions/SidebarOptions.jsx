import React from "react";
import "./SidebarOptions.css";

function SidebarOptions({ Icon, name, Avatar }) {
  return (
    <div className="sidebarOptions">
      {Avatar ? (
        <Avatar
          style={{ width: 35, height: 35 }}
          className="sidebarOptions__icon"
        />
      ) : (
        <img src={Icon} alt="" className="sidebarOptions__icon" />
      )}

      <p>{name}</p>
    </div>
  );
}

export default SidebarOptions;

import React from "react";
import useStateContext from "../../../context/DataLayer";
import "./SidebarOptions.css";

function SidebarOptions({ Icon, name, Avatar }) {
  const [{ user }, dispatch] = useStateContext();
  return (
    <div className="sidebarOptions">
      {Avatar ? (
        <Avatar
          src={user?.profilePicture?.profilePictureUrl}
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

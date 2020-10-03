import React from "react";
import "./HeaderOptions.css";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatBubbleRoundedIcon from "@material-ui/icons/ChatBubbleRounded";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

function HeaderOptions() {
  return (
    <div className="headerOptions">
      <div className="headerOptions__iconWrapper">
        <AddOutlinedIcon style={{ fontSize: 22 }} />
      </div>
      <div className="headerOptions__iconWrapper">
        <ChatBubbleRoundedIcon style={{ fontSize: 22 }} />
      </div>
      <div className="headerOptions__iconWrapper">
        <NotificationsIcon style={{ fontSize: 22 }} />
      </div>
      <div className="headerOptions__iconWrapper">
        <ExpandMoreOutlinedIcon style={{ fontSize: 22 }} />
      </div>
    </div>
  );
}

export default HeaderOptions;

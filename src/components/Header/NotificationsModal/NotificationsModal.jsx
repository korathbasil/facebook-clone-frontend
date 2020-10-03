import React from "react";
import "./NotificationsModal.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function HeaderModal() {
  return (
    <div className="notificationsModal">
      <div className="NM__top">
        <h2>Notifications</h2>
        <MoreHorizIcon />
      </div>
      <div className="NM__notificationsContaier">
        <div className="NM__notification">
          <p>Iam a new notification</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderModal;

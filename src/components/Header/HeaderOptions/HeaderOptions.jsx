import React, { useState } from "react";
import "./HeaderOptions.css";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatBubbleRoundedIcon from "@material-ui/icons/ChatBubbleRounded";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import AddModal from "../AddModal/AddModal";
import MessengerModal from "../MessengerModal/MessengerModal";
import NotificationsModal from "../NotificationsModal/NotificationsModal";
import MoreModal from "../MoreModal/MoreModal";

function HeaderOptions() {
  const [modal, setModal] = useState("");
  const modalChangeHandler = (modalName) => {
    if (modal == modalName) {
      setModal("");
    } else {
      setModal(modalName);
    }
  };

  return (
    <div className="headerOptions">
      <div
        onClick={() => modalChangeHandler("add")}
        className={`headerOptions__iconWrapper${
          modal === "add" ? " headerOptions__iconWrapper-active" : ""
        }`}
      >
        <AddOutlinedIcon style={{ fontSize: 22 }} />
      </div>
      <div
        onClick={() => modalChangeHandler("messenger")}
        className={`headerOptions__iconWrapper${
          modal === "messenger" ? " headerOptions__iconWrapper-active" : ""
        }`}
      >
        <ChatBubbleRoundedIcon style={{ fontSize: 22 }} />
      </div>
      <div
        onClick={() => modalChangeHandler("notifications")}
        className={`headerOptions__iconWrapper${
          modal === "notifications" ? " headerOptions__iconWrapper-active" : ""
        }`}
      >
        <NotificationsIcon style={{ fontSize: 22 }} />
      </div>
      <div
        onClick={() => modalChangeHandler("more")}
        className={`headerOptions__iconWrapper${
          modal === "more" ? " headerOptions__iconWrapper-active" : ""
        }`}
      >
        <ExpandMoreOutlinedIcon style={{ fontSize: 22 }} />
      </div>
      {/* <div className="headerOptions__modal"></div> */}
      {modal === "add" && <AddModal />}
      {modal === "messenger" && <MessengerModal />}
      {modal === "notifications" && <NotificationsModal />}
      {modal === "more" && <MoreModal />}
    </div>
  );
}

export default HeaderOptions;

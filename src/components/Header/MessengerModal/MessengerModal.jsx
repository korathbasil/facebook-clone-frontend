import React from "react";
import useStateContext from "../../../context/DataLayer";
import "./MessengerModal.css";
// Material Ui elements
import Avatar from "@material-ui/core/Avatar";

function MessengerModal() {
  const [{ chats }, dispatch] = useStateContext();
  return (
    <div className="messengerModal">
      <h2>Messenger</h2>
      {chats?.map((chat) => {
        return (
          <div className="messengerModal__chat">
            <Avatar />
            <h4>{chat.party?.displayName}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default MessengerModal;

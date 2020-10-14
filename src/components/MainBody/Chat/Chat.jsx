import React from "react";
import "./Chat.css";
import useStateContext from "../../../context/DataLayer";

// Material UI imports
import Avatar from "@material-ui/core/Avatar";
import CloseIcon from "@material-ui/icons/Close";
import RemoveIcon from "@material-ui/icons/Remove";
import ImageIcon from "@material-ui/icons/Image";
import Message from "./Message/Message";

function Chat() {
  const [{ chatBoxOpen }, dispatch] = useStateContext();
  return (
    <div className="chat">
      <div className="chat__head">
        <div className="chat__headLeft">
          <Avatar />
          <p>Bazil Korath</p>
        </div>
        <div className="chat__headRight">
          <div className="chat__headRightIcon">
            <RemoveIcon style={{ fontSize: 30 }} />
          </div>
          <div className="chat__headRightIcon">
            <CloseIcon
              onClick={() => {
                dispatch({
                  type: "SET_CHAT_BOX_OPEN",
                  open: false,
                });
              }}
              style={{ fontSize: 30 }}
            />
          </div>
        </div>
      </div>
      <div className="chat__body">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />

        <Message />
        <Message />
        <Message />
      </div>
      <div className="chat__foot">
        <ImageIcon />
        <form>
          <input type="text" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Chat;

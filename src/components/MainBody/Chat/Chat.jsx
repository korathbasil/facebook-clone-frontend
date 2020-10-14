import React from "react";
import "./Chat.css";
// Material UI imports
import Avatar from "@material-ui/core/Avatar";
import CloseIcon from "@material-ui/icons/Close";
import RemoveIcon from "@material-ui/icons/Remove";

function Chat() {
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
            <CloseIcon style={{ fontSize: 30 }} />
          </div>
        </div>
      </div>
      <div className="chat__body"></div>
      <div className="chat__foot">
        <form>
          <input type="text" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Chat;

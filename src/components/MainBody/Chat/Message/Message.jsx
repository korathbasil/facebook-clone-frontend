import React from "react";
import "./Message.css";
// Material UI imports
import Avatar from "@material-ui/core/Avatar";

function Message({ text, self }) {
  return (
    <div className="message">
      <div className={`${self ? "message__own" : "message__others"}`}>
        {!self && <Avatar style={{ fontSize: 30 }} />}
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Message;

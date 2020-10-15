import React from "react";
import "./Message.css";
// Material UI imports
import Avatar from "@material-ui/core/Avatar";

function Message({}) {
  return (
    <div className="message">
      <div className="message__others">
        <Avatar style={{ fontSize: 30 }} />
        <p>hellloooo guys</p>
      </div>
      <div className="message__own">
        <p>How atre you</p>
      </div>
    </div>
  );
}

export default Message;

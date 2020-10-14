import React from "react";
import "./ChatBubble.css";
import Avatar from "@material-ui/core/Avatar";

function ChatBubble() {
  return (
    <div className="chatBubble">
      <Avatar />
      {/* <div className="chatBubble__info">
        <h4>sagar SAG</h4>
        <p>You : How are you mahn</p>
      </div> */}
    </div>
  );
}

export default ChatBubble;

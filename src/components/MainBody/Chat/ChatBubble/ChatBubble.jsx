import React from "react";
import "./ChatBubble.css";
import Avatar from "@material-ui/core/Avatar";
import useStateContext from "../../../../context/DataLayer";

function ChatBubble() {
  const [{}, dispatch] = useStateContext();
  return (
    <div
      onClick={() => {
        dispatch({
          type: "SET_CHAT_BOX_OPEN",
          open: true,
        });
      }}
      className="chatBubble"
    >
      <Avatar />
      {/* <div className="chatBubble__info">
        <h4>sagar SAG</h4>
        <p>You : How are you mahn</p>
      </div> */}
    </div>
  );
}

export default ChatBubble;

import Avatar from "@material-ui/core/Avatar";
import React from "react";
import "./ContactsListItem.css";

function ContactsListItem({ avatar, displayName }) {
  return (
    <div className="contactsListItem">
      <Avatar src={avatar} />
      <p>{displayName}</p>
    </div>
  );
}

export default ContactsListItem;

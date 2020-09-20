import React from "react";
import "./ContactsList.css";
// Material UI Elements
import VideoCallIcon from "@material-ui/icons/VideoCall";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ContactsListItem from "./ContactsListItem/ContactsListItem";

function ContactsList() {
  return (
    <div className="contactsList">
      <div className="contactsList__top">
        <h4>Contacts</h4>
        <div className="contactsList__topIcons">
          <VideoCallIcon />
          <SearchIcon />
          <MoreHorizIcon />
        </div>
      </div>
      <ContactsListItem avatar="" displayName="John Sassy" />
      <ContactsListItem avatar="" displayName="rafeh Qazi" />
      <ContactsListItem avatar="" displayName="Sonny Sangha" />
      <ContactsListItem avatar="" displayName="John Dimitri" />
    </div>
  );
}

export default ContactsList;

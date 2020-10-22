import React, { useEffect } from "react";
import "./ContactsList.css";
import useStateContext from "../../context/DataLayer";
import axios from "../../axios";
import Axios from "axios";
// Material UI Elements
import VideoCallIcon from "@material-ui/icons/VideoCall";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ContactsListItem from "./ContactsListItem/ContactsListItem";

function ContactsList() {
  const [{ user }, dispatch] = useStateContext();
  // useEffect(() => {
  //   let source = Axios.CancelToken.source();
  //   axios.post()
  // }, []);
  console.log(user);
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
      {user?.friends.map((friend) => {
        return <ContactsListItem displayName={friend.displayName} />;
      })}
    </div>
  );
}

export default ContactsList;

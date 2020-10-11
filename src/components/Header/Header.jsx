import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import FacebookLogo from "./facebook-logo.png";
import useStateContext from "../../context/DataLayer";
import HeaderOptions from "./HeaderOptions/HeaderOptions";
import NotificationsModal from "./NotificationsModal/NotificationsModal";
import SearchModal from "./SearchModal/SearchModal";
// Material UI components
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import OndemandVideoOutlinedIcon from "@material-ui/icons/OndemandVideoOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import GroupWorkOutlinedIcon from "@material-ui/icons/GroupWorkOutlined";
import GamesOutlinedIcon from "@material-ui/icons/GamesOutlined";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import IconButton from "@material-ui/core/IconButton";

import Avatar from "@material-ui/core/Avatar";

function Header({ variant }) {
  const [{ user }, dispatch] = useStateContext();
  const [firstName, setFirstName] = useState("");
  const [modal, setModal] = useState("");
  useEffect(() => {
    let firstName = user.displayName.split(" ")[0];
    setFirstName(firstName);
  }, []);
  return (
    <div className="header">
      <SearchModal />
      <div className="header__left">
        <Link to="/">
          <img className="header__leftLogo" src={FacebookLogo} alt="" />
        </Link>
        <div className="header__leftSearch">
          <SearchOutlinedIcon className="header__leftSearchIcon" />
          {variant != "shrinked" && (
            <input
              className="header__leftSearchInput"
              type="text"
              placeholder="Search Facebook"
            />
          )}
        </div>
      </div>
      <div className="header__center">
        <Link to="/">
          <div className="header__centerIconContainer">
            <HomeOutlinedIcon className="header__centerIcon" />
          </div>
        </Link>
        <Link to="/watch">
          <div className="header__centerIconContainer">
            <OndemandVideoOutlinedIcon className="header__centerIcon" />
          </div>
        </Link>
        <Link to="market">
          <div className="header__centerIconContainer">
            <StorefrontOutlinedIcon className="header__centerIcon" />
          </div>
        </Link>
        <Link to="/groups">
          <div className="header__centerIconContainer">
            <GroupWorkOutlinedIcon className="header__centerIcon" />
          </div>
        </Link>
        <Link to="/gaming">
          <div className="header__centerIconContainer">
            <GamesOutlinedIcon className="header__centerIcon" />
          </div>
        </Link>
        <div className="header__centerIconContainer">
          <MenuOutlinedIcon className="header__centerIcon" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__rightAccount">
          <Avatar src={user?.avatar} style={{ width: 30, height: 30 }} />
          <h4>{firstName}</h4>
        </div>
        <HeaderOptions />
      </div>
      {modal === "notifications" && <NotificationsModal />}
      {/* <NotificationsModal /> */}
    </div>
  );
}

export default Header;

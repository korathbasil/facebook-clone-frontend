import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import FacebookLogo from "./facebook-logo.png";
// Material UI components
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import OndemandVideoOutlinedIcon from "@material-ui/icons/OndemandVideoOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import GroupWorkOutlinedIcon from "@material-ui/icons/GroupWorkOutlined";
import GamesOutlinedIcon from "@material-ui/icons/GamesOutlined";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import IconButton from "@material-ui/core/IconButton";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import Avatar from "@material-ui/core/Avatar";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <img className="header__leftLogo" src={FacebookLogo} alt="" />
        </Link>
        <div className="header__leftSearch">
          <SearchOutlinedIcon className="header__leftSearchIcon" />
          <input
            className="header__leftSearchInput"
            type="text"
            placeholder="Search Facebook"
          />
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
          <Avatar style={{ width: 30, height: 30 }} />
          <h4>Bazil Korath</h4>
        </div>
        <IconButton className="header__rightButtonWrapper">
          <AddOutlinedIcon />
        </IconButton>
        <IconButton>
          <ChatBubbleOutlineOutlinedIcon />
        </IconButton>
        <IconButton>
          <NotificationsNoneOutlinedIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;

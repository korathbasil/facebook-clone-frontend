import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import FacebookLogo from "./facebook-logo.png";
import useStateContext from "../../context/DataLayer";
import HeaderOptions from "./HeaderOptions/HeaderOptions";
import SearchModal from "./SearchModal/SearchModal";
// Material UI components
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import OndemandVideoOutlinedIcon from "@material-ui/icons/OndemandVideoOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import GroupWorkOutlinedIcon from "@material-ui/icons/GroupWorkOutlined";
import GamesOutlinedIcon from "@material-ui/icons/GamesOutlined";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import Avatar from "@material-ui/core/Avatar";

function Header({ variant }) {
  const [{ user }, dispatch] = useStateContext();
  const [firstName, setFirstName] = useState("");
  const [showSearchModal, setShowSearchModal] = useState(false);
  useEffect(() => {
    let firstName = user.displayName.split(" ")[0];
    setFirstName(firstName);
  }, []);
  const setShowSearchModalStatus = () => {
    showSearchModal ? setShowSearchModal(false) : setShowSearchModal(true);
  };
  return (
    <div className="header">
      {showSearchModal && (
        <SearchModal setShowSearchModalStatus={setShowSearchModalStatus} />
      )}
      <div className="header__left">
        <Link to="/">
          <img className="header__leftLogo" src={FacebookLogo} alt="" />
        </Link>
        <div onClick={setShowSearchModalStatus} className="header__leftSearch">
          <SearchOutlinedIcon className="header__leftSearchIcon" />
          {variant != "shrinked" && (
            <div className="header__leftSearchInput">
              <p>Search facebook</p>
            </div>
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
          <Avatar
            src={user?.profilePicture?.profilePictureUrl}
            style={{ width: 30, height: 30 }}
          />
          <h4>{firstName}</h4>
        </div>
        <HeaderOptions />
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions/SidebarOptions";
// Icons for SidebarOptions
import CovidIcon from "./covid-icon.png";
import FriendsIcon from "./friends-icon.png";
import GroupsIcon from "./groups-icon.png";
import MarketPlaceIcon from "./marketPlace-icon.png";
import EventsIcon from "./events-icon.png";
import MemoriesIcon from "./memories-icon.png";
import SavedIcon from "./saved-icon.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarOptions Icon={CovidIcon} name="COVID-19 Information Centre" />
      <Link to="/friends">
        <SidebarOptions Icon={FriendsIcon} name="Friends" />
      </Link>
      <SidebarOptions Icon={GroupsIcon} name="Groups" />
      <SidebarOptions Icon={MarketPlaceIcon} name="Market Place" />
      <SidebarOptions Icon={EventsIcon} name="Events" />
      <SidebarOptions Icon={MemoriesIcon} name="Memories" />
      <SidebarOptions Icon={SavedIcon} name="Saved" />
    </div>
  );
}

export default Sidebar;

import React from "react";
import "./MainBody.css";
import Header from "../Header/Header";
import Home from "./Home/Home";
import Sidebar from "../Sidebar/Sidebar";
import Feed from "../Feed/Feed";
import ContactsList from "../ContactsList/ContactsList";

function MainBody() {
  return (
    <div className="mainBody">
      <Header />
      <Home />
    </div>
  );
}

export default MainBody;

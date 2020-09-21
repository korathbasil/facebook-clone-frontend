import React from "react";
import "./MainBody.css";
import Header from "../Header/Header";
import Home from "./Home/Home";

function MainBody() {
  return (
    <div className="mainBody">
      <Header />
      <Home />
    </div>
  );
}

export default MainBody;

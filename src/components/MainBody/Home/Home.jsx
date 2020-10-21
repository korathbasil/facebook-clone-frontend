import React, { useEffect, useState } from "react";
import ContactsList from "../../ContactsList/ContactsList";
import getSocket from "../../../socket";
import Feed from "./Feed/Feed";
import Sidebar from "../../Sidebar/Sidebar";
import Header from "../../Header/Header";
import "./Home.css";
import PostingOverlay from "./PostingOverlay/PostingOverlay";

function Home() {
  const [overlayShowStatus, setOverlayShowStatus] = useState(false);
  const overlayShowStatusHandler = () => {
    overlayShowStatus
      ? setOverlayShowStatus(false)
      : setOverlayShowStatus(true);
  };

  return (
    <div className="home">
      <Header variant="shrinked" />
      <div className="home__bottom">
        <Sidebar />
        <Feed overlayShowStatusHandler={overlayShowStatusHandler} />
        <ContactsList />
      </div>
      {overlayShowStatus && (
        <PostingOverlay overlayShowStatusHandler={overlayShowStatusHandler} />
      )}
    </div>
  );
}

export default Home;

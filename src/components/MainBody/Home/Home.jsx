import React, { useState } from "react";
import ContactsList from "../../ContactsList/ContactsList";
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
      <Header />
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

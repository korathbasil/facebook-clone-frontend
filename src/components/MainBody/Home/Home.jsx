import React from "react";
import ContactsList from "../../ContactsList/ContactsList";
import Feed from "./Feed/Feed";
import Sidebar from "../../Sidebar/Sidebar";
import Header from "../../Header/Header";
import "./Home.css";
import PostingOverlay from "./PostingOverlay/PostingOverlay";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home__bottom">
        <Sidebar />
        <Feed />
        <ContactsList />
      </div>
      <PostingOverlay />
    </div>
  );
}

export default Home;

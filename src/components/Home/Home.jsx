import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Feed from "../Feed/Feed";
import ContactsList from "../ContactsList/ContactsList";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home__body">
        <Sidebar />
        <Feed />
        <ContactsList />
      </div>
    </div>
  );
}

export default Home;

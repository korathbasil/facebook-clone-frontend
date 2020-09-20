import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import MainBody from "../MainBody/MainBody";
import ContactsList from "../ContactsList/ContactsList";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home__body">
        <Sidebar />
        <MainBody />
        <ContactsList />
      </div>
    </div>
  );
}

export default Home;

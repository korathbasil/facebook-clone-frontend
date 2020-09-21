import React from "react";
import ContactsList from "../../ContactsList/ContactsList";
import Feed from "./Feed/Feed";
import Sidebar from "../../Sidebar/Sidebar";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <Feed />
      <ContactsList />
    </div>
  );
}

export default Home;

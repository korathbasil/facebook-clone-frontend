import React from "react";
import "./SearchModal.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SearchIcon from "@material-ui/icons/Search";

function SearchModal({ setShowSearchModalStatus }) {
  return (
    <div className="searchModal">
      <div className="searchModal__header">
        <ArrowBackIcon
          onClick={setShowSearchModalStatus}
          className="searchModal__headerBackIcon"
        />
        <div className="searchModal__headerSearch">
          <SearchIcon className="searchModal__headerSearchicon" />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <p>Recent Searches</p>
    </div>
  );
}

export default SearchModal;

import React from "react";
import "./SearchModal.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SearchIcon from "@material-ui/icons/Search";

function SearchModal() {
  return (
    <div className="searchModal">
      <div className="searchModal__header">
        <ArrowBackIcon className="searchModal__headerBackIcon" />
        <div className="searchModal__headerSearch">
          <SearchIcon className="searchModal__headerSearchicon" />
          <input type="text" />
        </div>
      </div>
    </div>
  );
}

export default SearchModal;

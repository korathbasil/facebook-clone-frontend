import React, { useEffect, useState } from "react";
import "./SearchModal.css";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SearchIcon from "@material-ui/icons/Search";
import axios from "../../../axios";
import Axios from "axios";
import useStateContext from "../../../context/DataLayer";
import { Avatar } from "@material-ui/core";

function SearchModal({ setShowSearchModalStatus }) {
  const [{ token }, dispatch] = useStateContext();
  const [searchText, setSearchText] = useState("");
  const [searchedUsers, setSearchedUsers] = useState([]);
  useEffect(() => {
    const source = Axios.CancelToken.source();
    if (searchText != "") {
      axios
        .post("/user/search", {
          headers: {
            "auth-token": token,
          },
          searchText: searchText,
        })
        .then((result) => {
          setSearchedUsers(result.data);
        })
        .catch((e) => console.log(e));
    }

    return () => {
      source.cancel();
    };
  }, [searchText]);
  return (
    <div className="searchModal">
      <div className="searchModal__header">
        <ArrowBackIcon
          onClick={setShowSearchModalStatus}
          className="searchModal__headerBackIcon"
        />
        <div className="searchModal__headerSearch">
          <SearchIcon className="searchModal__headerSearchicon" />
          <input
            type="text"
            placeholder="Search Facebook"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              if (e.target.value === "") {
                setSearchedUsers([]);
              }
            }}
          />
        </div>
      </div>
      <p>Recent Searches</p>
      {searchedUsers?.map((user) => {
        return (
          <Link to={`/user/${user.userId}`}>
            <div className="searchModal__result">
              <Avatar />
              <p>{user?.displayName}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default SearchModal;

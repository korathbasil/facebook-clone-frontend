import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./MoreModal.css";
import useStateContext from "../../../context/DataLayer";
// Material Ui elements
import Avatar from "@material-ui/core/Avatar";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function MoreModal() {
  const [{ user }, dispatch] = useStateContext();
  const logoutHandler = () => {
    localStorage.setItem("token", null);
    dispatch({
      type: "LOGOUT_USER",
      user: null,
    });
    Redirect("/account/login");
  };
  return (
    <div className="moreModal">
      <Link to="/profile">
        <div className="moreModal__user">
          <Avatar
            src={user?.profilePicture?.profilePictureUrl}
            style={{ width: 65, height: 65 }}
          />
          <div className="moreModal__userInfo">
            <h3>{user?.displayName}</h3>
            <p>See your profile</p>
          </div>
        </div>
      </Link>
      <div className="moreModal__bottom">
        <div onClick={logoutHandler} className="moreModal__item">
          <div className="moreModal__itemIcon">
            <ExitToAppIcon />
          </div>
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
}

export default MoreModal;

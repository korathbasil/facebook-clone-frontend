import React, { useEffect } from "react";
import "./UserProfile.css";
import Header from "../../Header/Header";
import Profile from "../Profile/Profile";
import useStateContext from "../../../context/DataLayer";
import axios from "../../../axios";
import Axios from "axios";

function UserProfile(props) {
  const [{ selectedUser, user }, dispatch] = useStateContext();

  useEffect(() => {
    let source = Axios.CancelToken.source();
    axios
      .post("/user/getUser", {
        userId: props.match.params.userId,
        CancelToken: source.token,
      })
      .then((result) => {
        // console.log(result.data);
        dispatch({
          type: "SET_SELECTED_USER",
          user: result.data,
        });
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="userProfile">
      <Header />
      <Profile ownProfile={false} />
    </div>
  );
}

export default UserProfile;

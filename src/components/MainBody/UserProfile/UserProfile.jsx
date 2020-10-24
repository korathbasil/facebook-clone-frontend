import React, { useEffect } from "react";
import "./UserProfile.css";
import Header from "../../Header/Header";
import Profile from "../Profile/Profile";
import useStateContext from "../../../context/DataLayer";
import Loading from "../../Loadings/Loading";
import axios from "../../../axios";
import Axios from "axios";

function UserProfile(props) {
  const [{ selectedUser, user }, dispatch] = useStateContext();

  useEffect(() => {
    dispatch({
      type: "SET_SELECTED_USER",
      user: null,
    });
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
        console.log(result.data);
        console.log(user);
      })
      .catch((e) => console.log(e));
  }, [props.match.params.userId]);
  return (
    <div className="userProfile">
      <Header />
      {selectedUser && <Profile ownAccount={selectedUser?._id === user?.id} />}
      {!selectedUser && <Loading />}
    </div>
  );
}

export default UserProfile;

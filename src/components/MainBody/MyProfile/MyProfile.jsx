import React, { useEffect } from "react";
import Header from "../../Header/Header";
import Profile from "../Profile/Profile";
import axios from "../../../axios";
import useStateContext from "../../../context/DataLayer";

function MyProfile() {
  const [{ selectedUser }, dispatch] = useStateContext();

  useEffect(() => {
    axios
      .post("/user/getUser", {
        userId: "5f7f19cc6210b1561207400c",
      })
      .then((result) => {
        dispatch({
          type: "SET_SELECTED_USER",
          user: result.data,
        });
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      <Header />
      <Profile ownAccount={true} />
    </div>
  );
}

export default MyProfile;

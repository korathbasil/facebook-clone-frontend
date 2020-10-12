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
        userId: "5f84a1c191ba2d433f07c1db",
      })
      .then((result) => {
        console.log(result.data);
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

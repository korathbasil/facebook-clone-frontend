import React, { useEffect, useState } from "react";
import "./MyProfile.css";
import Header from "../../Header/Header";
import Profile from "../Profile/Profile";
import ImageUploadModal from "../ImageUploadModal/ImageUploadModal";
import axios from "../../../axios";
import Axios from "axios";
import useStateContext from "../../../context/DataLayer";

function MyProfile() {
  const [{ selectedUser, user }, dispatch] = useStateContext();
  const [showImageUploadModal, setShowImageUploadModal] = useState(true);

  useEffect(() => {
    let source = Axios.CancelToken.source();
    axios
      .post("/user/getUser", {
        userId: user?.id,
        CancelToken: source.token,
      })
      .then((result) => {
        console.log(result.data);
        dispatch({
          type: "SET_SELECTED_USER",
          user: result.data,
        });
      })
      .catch((e) => console.log(e));
    return () => {
      source.cancel();
    };
  }, []);
  return (
    <div className="myProfile">
      <div className="myProfile__body">
        <Header />
        <div className="myProfile__profile">
          <Profile ownAccount={true} />
        </div>
      </div>
      {/* <div className="myProfile__modal"></div> */}
      {showImageUploadModal && <ImageUploadModal />}
    </div>
  );
}

export default MyProfile;

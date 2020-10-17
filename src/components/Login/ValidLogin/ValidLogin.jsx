import React from "react";
import "./ValidLogin.css";
import FBLogo from "../facebook-logo.png";
// Material Ui imports
import Avatar from "@material-ui/core/Avatar";

function ValidLogin({ errors }) {
  return (
    <div className="validLogin">
      <div className="VL__contents">
        <img src={FBLogo} alt="" />
        <div className="VL__container">
          <div className="VL__top">
            <Avatar />
            <h3>Login as Bazil Korath</h3>
            <p>korathbasil@email.com Not you?</p>
          </div>
          <div className="VL__formContainer">
            <form action="">
              <input className="VL__formEmailInput" type="email" />
              <div className="VL__formEmailErrorText">
                {errors?.email && <p>{errors.email}</p>}
              </div>
              <input className="VL__formPasswordInput" type="password" />
              <div className="VL__formPasswordErrorText">
                {errors?.password && <p>{errors.password}</p>}
              </div>
              <button type="submit">Login</button>
              <div className="VL__formLoginButton">
                <p>Log in</p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <style>
        {`
          .VL__formEmailInput {
            border: 1px solid red;
          }
        `}
      </style>
    </div>
  );
}

export default ValidLogin;

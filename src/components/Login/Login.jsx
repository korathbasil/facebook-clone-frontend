import React from "react";
import "./Login.css";
import FBLogo from "./facebook-logo.png";

function Login() {
  return (
    <div className="login">
      <div className="login__contents">
        <div className="login__left">
          <img src={FBLogo} alt="" className="login__leftLogo" />
          <h2>
            <span>Facebook helps you to connect and share</span>
            <span>with the people in your life.</span>
          </h2>
        </div>
        <div className="login__right">
          <form action="" className="login__rightForm">
            <input type="email" placeholder="Email address or phone number" />
            <input type="passsword" placeholder="Password" />
            <button type="submit">Log in</button>
          </form>
          <p>Forgot password?</p>
          <div className="login__rightBottom">
            <button>Create New Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import "./Login.css";
import FBLogo from "./facebook-logo.png";
// Materila UI elements
import CloseIcon from "@material-ui/icons/Close";

function Login() {
  const [signupFormOpenStatus, setSignupFormOpenStatus] = useState(false);
  const openSignupForm = () => {
    setSignupFormOpenStatus(true);
  };
  const closeSignupForm = () => {
    setSignupFormOpenStatus(false);
  };
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
          <p>Forgotten password?</p>
          <div className="login__rightBottom">
            <button onClick={openSignupForm}>Create New Account</button>
          </div>
        </div>
      </div>
      {signupFormOpenStatus && (
        <div className="login__overlay">
          <div className="login__signupContainer">
            <div className="login__signupTop">
              <div className="login__signupTopLeft">
                <h2>Sign Up</h2>
                <p>Its quick and easy.</p>
              </div>
              <div className="login__signupTopRight">
                <CloseIcon onClick={closeSignupForm} />
              </div>
            </div>
            <div className="login__signupBottom">
              <form action="" className="login__signupForm">
                <div className="login__signupFormNamesContainer">
                  <input
                    type="text"
                    placeholder="First name"
                    className="login__signupFormGeneralInput login__signupFormNameInput login__signupFormFirstInput"
                  />
                  <input
                    type="text"
                    placeholder="Surname"
                    className="login__signupFormGeneralInput login__signupFormNameInput"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email address"
                  className="login__signupFormGeneralInput"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="login__signupFormGeneralInput"
                />
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="login__signupFormGeneralInput"
                />
                <div className="login__signupFormDOBContainer">
                  <label>Date of birth</label>
                  <div className="login__signupFormDOB">
                    <select
                      className="login__signupFormDOBSelectors login__signupFormDOBSelector"
                      name="day"
                      id="day"
                    >
                      <option value="">Day</option>
                      <option value="1">1</option>
                      <option value="1">2</option>
                      <option value="1">3</option>
                      <option value="1">4</option>
                      <option value="1">5</option>
                      <option value="1">6</option>
                      <option value="1">7</option>
                      <option value="1">8</option>
                      <option value="1">9</option>
                      <option value="1">10</option>
                      <option value="1">11</option>
                      <option value="1">12</option>
                      <option value="1">13</option>
                      <option value="1">14</option>
                      <option value="1">14</option>
                      <option value="1">15</option>
                      <option value="1">16</option>
                      <option value="1">17</option>
                      <option value="1">18</option>
                      <option value="1">19</option>
                      <option value="1">20</option>
                      <option value="1">21</option>
                      <option value="1">22</option>
                      <option value="1">23</option>
                      <option value="1">24</option>
                      <option value="1">25</option>
                      <option value="1">26</option>
                      <option value="1">27</option>
                      <option value="1">28</option>
                      <option value="1">29</option>
                      <option value="1">30</option>
                      <option value="1">31</option>
                    </select>
                    <select
                      name="month"
                      id="month"
                      className="login__signupFormDOBSelectors login__signupFormDOBSelector"
                    >
                      <option value="">Month</option>
                      <option value="jan">January</option>
                      <option value="feb">February</option>
                      <option value="mar">March</option>
                      <option value="apr">April</option>
                      <option value="may">May</option>
                      <option value="jun">June</option>
                      <option value="jul">July</option>
                      <option value="aug">August</option>
                      <option value="sep">September</option>
                      <option value="oct">October</option>
                      <option value="nov">November</option>
                      <option value="dec">December</option>
                    </select>
                    <select
                      name="yesr"
                      id="year"
                      className="login__signupFormDOBSelectors"
                    >
                      <option value="">Year</option>
                      <option value="2000">2000</option>
                      <option value="1999">1999</option>
                      <option value="1998">1998</option>
                      <option value="1997">1997</option>
                      <option value="1996">1996</option>
                      <option value="1995">1995</option>
                      <option value="1994">1994</option>
                      <option value="1993">1993</option>
                      <option value="1992">1995</option>
                      <option value="1991">1995</option>
                      <option value="1990">1995</option>
                    </select>
                  </div>
                </div>
                <div className="login__signupFormGender">
                  <div className="login__signupFormGenderSelectorContainer login__signupFormGenderSelector">
                    <label>Male</label>
                    <input type="radio" id="male" name="gender" value="male" />
                  </div>
                  <div className="login__signupFormGenderSelectorContainer login__signupFormGenderSelector">
                    <label>Female</label>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                    />
                  </div>
                  <div className="login__signupFormGenderSelectorContainer">
                    <label>Custom</label>
                    <input
                      type="radio"
                      id="custom"
                      name="gender"
                      value="custom"
                    />
                  </div>
                </div>
                <p className="login__signupFormDisclaimer">
                  By clicking Sign Up, you agree to our Terms, Data Policy and
                  Cookie Policy. You may receive SMS notifications from us and
                  can opt out at any time.
                </p>
                <button>Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;

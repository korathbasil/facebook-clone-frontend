import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../axios";
import "./Login.css";
import FBLogo from "./facebook-logo.png";
import useStateContext from "../../context/DataLayer";
// Materila UI elements
import CloseIcon from "@material-ui/icons/Close";
import CircularProgress from "@material-ui/core/CircularProgress";
import LoadingCircle from "../LoadingCircle/LoadingCircle";

function Login() {
  const [{ token }, dispatch] = useStateContext();
  const history = useHistory();
  const [signupFormOpenStatus, setSignupFormOpenStatus] = useState(false);

  // State for login form data
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  //  State for signup form data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [gender, setGender] = useState("");
  const [DOBday, setDOBday] = useState("");
  const [DOBmonth, setDOBmonth] = useState("");
  const [DOByear, setDOByear] = useState("");

  // useEffect(() => {
  //   if (token) {
  //     history.push("/");
  //   }
  // }, [token]);

  const userLogin = async (e) => {
    e.preventDefault();
    await axios
      .post("/auth/login", {
        email: loginEmail,
        password: loginPassword,
      })
      .then((res) => {
        console.log(res.data.token);
        dispatch({
          type: "SET_USER",
          user: res.data,
        });
        // localStorage.setItem("token", res.data.token);
        setLoginEmail("");
        setLoginPassword("");
        history.push("/");
      })
      .catch((e) => alert(e.error));
  };
  const userSignup = async (e) => {
    e.preventDefault();
    const date = new Date(DOByear + "-" + DOBmonth + "-" + DOBday);
    const displayName = firstName + " " + lastName;
    console.log(date);
    await axios
      .put("/auth/signup", {
        displayName: displayName,
        email: signupEmail,
        password: signupPassword,
        gender: gender,
        DOB: date,
      })
      .then((res) => alert(res.data))
      .catch((e) => console.log(e.message));
  };
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
          {/* <CircularProgress color="primary" /> */}
          {/* <LoadingCircle /> */}
          <form className="login__rightForm">
            <input
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              type="email"
              placeholder="Email address or phone number"
            />
            <input
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              type="passsword"
              placeholder="Password"
            />
            <button onClick={userLogin} type="submit">
              Log in
            </button>
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
              <form className="login__signupForm">
                <div className="login__signupFormNamesContainer">
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    placeholder="First name"
                    className="login__signupFormGeneralInput login__signupFormNameInput login__signupFormFirstInput"
                  />
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    placeholder="Surname"
                    className="login__signupFormGeneralInput login__signupFormNameInput"
                  />
                </div>
                <input
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  type="email"
                  placeholder="Email address"
                  className="login__signupFormGeneralInput"
                />
                <input
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
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
                      value={DOBday}
                      onChange={(e) => setDOBday(e.target.value)}
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
                      value={DOBmonth}
                      onChange={(e) => setDOBmonth(e.target.value)}
                      name="month"
                      id="month"
                      className="login__signupFormDOBSelectors login__signupFormDOBSelector"
                    >
                      <option value="">Month</option>
                      <option value="01">January</option>
                      <option value="02">February</option>
                      <option value="03">March</option>
                      <option value="04">April</option>
                      <option value="05">May</option>
                      <option value="06">June</option>
                      <option value="07">July</option>
                      <option value="08">August</option>
                      <option value="09">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>
                    <select
                      value={DOByear}
                      onChange={(e) => setDOByear(e.target.value)}
                      name="year"
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
                    <input
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                    />
                  </div>
                  <div className="login__signupFormGenderSelectorContainer login__signupFormGenderSelector">
                    <label>Female</label>
                    <input
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                    />
                  </div>
                  <div className="login__signupFormGenderSelectorContainer">
                    <label>Custom</label>
                    <input
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
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
                <button onClick={userSignup}>Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;

import React from "react";
import "./LoginPage.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { RegisterUser, LoginUser } from "../components/utils/db.requests";
const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const history = useHistory();
  function validationCheck() {
    let result = "";
    if (!email.includes("@")) result += " invalid email ";
    if (!(password.length > 6)) result += "password too small";
    return result;
  }
  async function handleSignup(e: any) {
    // console.log(validationCheck());
    // if (validationCheck()) return informUserForInvalidInput();
    const credentials = { email, password, name };
    console.log(credentials);
    const result = await RegisterUser(credentials);
    if (result) {
      const loginIsSuccessful = await LoginUser({ email, password });
      if (loginIsSuccessful) {
        history.push("/");
      } else {
        console.log("unsuccessfull");
      }
    } else {
      //todo message to user
    }
  }

  function handleChange(e: any) {
    switch (e.target.placeholder) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "name":
        setName(e.target.value);
        break;
    }
    return;
  }

  return (
    <div className="login-container">
      <div className="login-box" style={{ height: "35rem" }}>
        <h2 className="login-title">Welcome Back To Facebook</h2>
        <div className="login-input-container">
          <p className="login-input-label">Your email</p>
          <input
            className="login-input"
            placeholder="email"
            onChange={handleChange}
            value={email}
          />
        </div>
        <div className="login-input-container">
          <p className="login-input-label">Your name (publicly visible)</p>
          <input
            className="login-input"
            placeholder="name"
            onChange={handleChange}
            value={name}
          />
        </div>
        <div className="login-input-container">
          <p className="login-input-label">Your password</p>
          <input
            className="login-input"
            placeholder="password"
            onChange={handleChange}
            value={password}
            type="password"
          />
        </div>
        <span className="login-forgotpassword">Forgot your password?</span>
        <button
          className="login-button"
          style={{ marginLeft: "auto" }}
          onClick={handleSignup}
        >
          Sign Up
        </button>
        <div className="login-noaccount">
          <p className="login-noaccount-label">Already have an account?</p>
          <Link to="/login">
            <button className="login-button" style={{ width: "12rem" }}>
              Login
              <FiLogIn className="login-icon" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
function informUserForInvalidInput() {
  throw new Error("Function not implemented.");
}

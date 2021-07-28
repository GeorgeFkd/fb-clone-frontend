import React from "react";
import "./LoginPage.css";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { useState } from "react";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  function validationCheck() {
    let result = "";
    if (!email.includes("@")) result += " invalid email ";
    if (!(password.length > 6)) result += "password too small";
    return result;
  }
  async function handleLogin(e: any) {
    let data, response;
    if (validationCheck()) return informUserForInvalidInput();
    try {
      response = await fetch("http://localhost:4000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      data = await response.json();
    } catch (err) {
      console.error(err);
    }

    //! i have to somehow encrypt the id
    if (response?.status === 201) {
      console.log("Successfull login");
      localStorage.setItem("user", data.token);

      history.push("/");
    }
  }

  function handleChange(e: any) {
    if (e.target.placeholder === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
    console.log(e.target.placeholder);
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Welcome Back To Facebook</h2>
        <div className="login-input-container">
          <p className="login-input-label">The email you signed up with</p>
          <input
            className="login-input"
            placeholder="email"
            onChange={handleChange}
            value={email}
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
          onClick={handleLogin}
        >
          Login
          <FiLogIn className="login-icon" />
        </button>
        <div className="login-noaccount">
          <p className="login-noaccount-label">Dont Have An Account?</p>
          <Link to="/signup">
            <button className="login-button" style={{ width: "12rem" }}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
function informUserForInvalidInput() {
  console.log(
    "User put your email properly and a password more than 20 characters"
  );
}

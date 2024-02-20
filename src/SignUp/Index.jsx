import style from "./index.module.css";
import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";
import google from "../image/google.png";
import facebook from "../image/facebook.png";
import twitter from "../image/twitter.png";
import Content from "../content/Content";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Directly use navigate hook

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleSignUpClick = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setErrorMessage("Please enter all required fields.");
      return;
    }

    const user = {
      username: username,
      email: email,
      password: password,
    };

    fetch("https://ujjwalzero7.pythonanywhere.com/api/create_user/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();
      })
      .then((datas) => {
        console.log("Sign up successful:", datas);
        // alert("Signup successful");

        // Check if status is 201 and navigate
        if (datas.status === 201) {
          const userid = datas.userid;
          const keytoken = datas.keytoken;

          sessionStorage.setItem("userid", userid);
          sessionStorage.setItem("keytoken", keytoken);
          navigate("/data"); // Directly call navigate after success
        }
      })
      .catch((error) => {
        console.error("Error during sign up:", error);
        setErrorMessage("Signup failed. Please try again.");
      });
  };

  return (
    <>
      <div className={style.flex}>
        <Content />

        <div className={style.container}>
          <div className={style.head}>
            <p
              style={{
                fontSize: "15px",
                fontWeight: "600",
                color: "rgb(9, 40, 219)",
                marginLeft: "20px",
              }}
            >
              Welcome to G-Drive
            </p>
            <button className={style.signin}>
              <Link
                to="/signin"
                style={{ color: "white", textDecoration: "none" }}
              >
                Sign In ➜
              </Link>
            </button>
          </div>
          <div className={style.input}>
            <form>
              <input
                type="text"
                placeholder="  Enter Your Name"
                name="username"
                value={username}
                onChange={(e) => setName(e.target.value)}
                ref={nameInputRef}
                required
              />

              <br />
              <input
                type="email"
                placeholder="  Enter Your Mail"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ref={emailInputRef}
                required
              />
              <br />
              <input
                type="password"
                placeholder="  Enter Your Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ref={passwordInputRef}
                required
              />
            </form>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </div>
          <button className={style.btn} onClick={handleSignUpClick}>
            Sign Up
          </button>

          <p style={{ marginLeft: "130px", color: "grey" }}>or sign up with:</p>
          <div className={style.footer}>
            <button
              style={{
                cursor: "pointer",
                color: "#1266f1",
                fontSize: "35px",
                marginRight: "-30px",
                border: "none",
                backgroundColor: "transparent",
              }}
            >
              <img src={facebook} alt="facebook" />
            </button>
            <button
              style={{
                cursor: "pointer",
                color: "#1266f1",
                fontSize: "35px",
                marginRight: "-30px",
                border: "none",
                backgroundColor: "transparent",
              }}
            >
              <img src={google} alt="google" />
            </button>
            <button
              style={{
                cursor: "pointer",
                color: "#1266f1",
                fontSize: "35px",
                border: "none",
                backgroundColor: "transparent",
                marginBottom: "-14px",
              }}
            >
              <img src={twitter} alt="twitter" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

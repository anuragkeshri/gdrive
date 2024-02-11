import sign from "./signin.module.css";
import { Link } from "react-router-dom";
import google from "../google.png";
import facebook from "../facebook.png";
import twitter from "../twitter.png";
import React, { useState } from "react";
import Content from "../content/Content";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleEmailchange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Please enter all required fields.");
      return;
    }

    const user = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("https://ujjwalzero7.pythonanywhere.com/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.status === 200) {
        const data = await response.json();
        const userid = data.userid;
        const keytoken = data.keytoken;

        sessionStorage.setItem("userid", userid);
        sessionStorage.setItem("keytoken", keytoken);

        console.log(`userid:${userid}`);
        console.log(`keytoken:${keytoken}`);
        console.log("Success:", response);
        alert("Successfully Login ");
        navigate("/data");
      } else {
        console.error("Error:", response.false);
        alert("Sorry, incorrect credentials. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error.message);
      alert("Sorry, an error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div className={sign.flex}>
        <Content />
        <div className={sign.container}>
          <div className={sign.head}>
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
          </div>
          <div className={sign.input}>
            <input
              type="text"
              placeholder="  Enter Your Name"
              value={email}
              onChange={handleEmailchange}
            />
            <br />
            <input
              type="password"
              placeholder="  Enter Your Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button className={sign.btn} onClick={handleSignIn}>
            Sign In
          </button>
          {errorMessage && (
            <p style={{ color: "red", marginLeft: "20px" }}>{errorMessage}</p>
          )}
          <p style={{ marginLeft: "130px", color: "grey" }}>or signin with:</p>
          <div className={sign.footer}>
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

export default SignIn;

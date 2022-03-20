import React, { useState,useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Alert from "@mui/material/Alert";
import logo from "../../asset/logo.png";
import "./Auth.css";
import Register from "./Register";
import { useSelector } from "react-redux";

const Auth = (props) => {
  const [title, setTitle] = useState("Welcome Back");

  const loginAlter = useSelector(
    (state) => state.UserLogRegReducer.errorLoginUser
  );
  console.log(loginAlter);
  
  const handleTitle = () => {
    setTitle("Create account");
  };
  const handleTitle2 = () => {
    setTitle("Welcome Back");
  };

  const logoDisplay = () => {
    const image = document.querySelector("#logo");
    image.classList("logo__none");
  };
  return (
    <div className="author">
      <div className="author__con">
        <header>
          <h1>{title}</h1>
        </header>
        <section>
          <Routes>
            <Route path="*" element={<Login handleTitle={handleTitle} />} />
            <Route
              path="/Register"
              element={<Register handleTitle2={handleTitle2} />}
            />
          </Routes>
        </section>
      </div>
      {loginAlter &&  (
        <div className="user_altert">
          <Alert severity="error" className="fs-3">
            Please enter correct email and password!
          </Alert>
        </div>
      )}
    </div>
  );
};

export default Auth;

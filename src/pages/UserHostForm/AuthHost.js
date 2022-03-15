import React, { useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Login from "./LoginHost";
import logo from "../../asset/logo.png";
import "../UserAuthForm/Auth.css";
import RegisterHost from "./RegisterHost";
import { useSelector } from "react-redux";
import HostHome from "../Host/HostHome/HostHome";

const Auth = (props) => {
  const [title, setTitle] = useState("Welcome Back");
  
  const handleTitle = () => {
    setTitle("Create account");
  };
  const handleTitle2 = () => {
    setTitle("Welcome Back");
  };

  return (
    <div className="author">
      <div className="author__con">
        <header>
          {/* <img src={logo} alt="logo" id="logo"/> */}
          <h1>{title}</h1>
        </header>
        <section>
          <Routes>
            <Route path="*" element={<Login handleTitle={handleTitle} />} />
            <Route
              path="/RegisterHoster"
              element={<RegisterHost handleTitle2={handleTitle2} />}
            />
          </Routes>
        </section>
      </div>
    </div>
  );
};

export default Auth;

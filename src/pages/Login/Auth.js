import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import logo from "../../asset/logo.png";
import "./Auth.css";
import Register from "./Register";

const Auth = (props) => {
  const [title, setTitle] = useState("Welcome Back");

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
          {/* <img src={logo} alt="logo" id="logo"/> */}
          <h1>{title}</h1>
        </header>
        <section>
         
          <Routes>
            <Route
              path="/"
              element={ <Login handleTitle={handleTitle} />} />
            <Route
              path="/Register"
              element={<Register  handleTitle2={handleTitle2} />}
            />
          </Routes>
        </section>
      </div>
    </div>
  );
};

export default Auth;

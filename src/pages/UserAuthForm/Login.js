import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { userLogin } from "../../store/Actions/userAction/UserLogRegAction";
import logo from "../../asset/logo.png";

import "./Login.css";

const Login = (props) => {
  const dispacth = useDispatch();

  const login_User = (e) => {
    dispacth(userLogin(e));
  };

  
  const data = {
    email: "",
    password: "",
  };

  const [signIn, setSignIn] = useState(data);

  const handleChange = (e) => {
    const user = { ...signIn, [e.target.name]: e.target.value };
    setSignIn(user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login_User(signIn);
  };
  
  
  return (
    <div className="login_con">
      <img src={logo} alt="logo" className="Login_logo"/>
      <form className="sign__in" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          autoComplete="off"
          name="email"
        value={signIn.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter your password"
          autoComplete="off"
          password="password"
          name="password"
          value={signIn.password}
          onChange={handleChange}
        />

        <NavLink to="/Register">
          <button className="create__account" onClick={props.handleTitle}>
            create account
          </button>
        </NavLink>

        <button className="sign__in--btn" >Sign in</button>
      </form>
    </div>
  );
};

// https://youtu.be/-YXb03hhKh4
// onClick={}
// https://auth0.com/blog/secure-your-react-and-redux-app-with-jwt-authentication/ https://redux.js.org/faq/miscellaneous

export default Login;

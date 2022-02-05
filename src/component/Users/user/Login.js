import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";

const Login = (props) => {
  // console.log(props);
  const [isLogin,setLogin] = useState(false)
  
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first">
          <img
            src={require("../../../asset/logo.png")}
            id="icon"
            alt="User Icon"
          />
        </div>

        <form>
          <input
            type="email"
            id="login"
            className="fadeIn second"
            name="login"
            placeholder="login"
          />
          <input
            type="password"
            id="password"
            className="fadeIn third"
            name="login"
            placeholder="password"
          />
          <NavLink to="/">
            <input
              type="submit"
              className="fadeIn fourth"
              value="Log In"
              onClick={props.login}
            />
          </NavLink>
        </form>

        <div id="formFooter">
          <NavLink to="/Register" className="underlineHover">
            Register Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;

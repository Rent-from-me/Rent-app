import React from 'react';
import "./Register.css"

const Register = () => {
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
            className="fadeIn second f2-3"
            name="login"
            value=""
            placeholder="login"
          />
          <input
            type="password"
            id="password"
            className="fadeIn third"
            name="login"
            placeholder="password"
          />
            <input
              type="submit"
              className="fadeIn fourth"
              value="Log In"
            />
        </form>
      </div>
    </div>
  );
};

export default Register;

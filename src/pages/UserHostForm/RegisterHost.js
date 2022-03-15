import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { RegisterHoster } from "../../store/Actions/HostAction";
import "../UserAuthForm/Register.css";

const init = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
};

const Register = (props) => {
  const [title, setTitle] = useState(props.title);
  const [signUp, setSignUp] = useState(init);
  
  const dispacth = useDispatch()
  
  const sign_Up = (e) => {
    dispacth(RegisterHoster(e));
  }
  const handleTitle = () => {
    setTitle("Welcome back again!");
  };

  const handleChange = (e) => {
    const user = {...signUp, [e.target.name] : e.target.value}
    setSignUp(user)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sign_Up(signUp);
  }
  

  return (
    <form class="sign__up" onSubmit={handleSubmit}>
      <input
        type="text"
        name="first_name"
        placeholder="Enter your FristName"
        value={signUp.first_name}
        onChange={handleChange}
      />
      <input
        type="text "
        name="last_name"
        placeholder="Enter your Lastname"
        value={signUp.last_name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={signUp.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={signUp.password}
        onChange={handleChange}
      />
      <NavLink to="*">
        <button className="create__account" onClick={props.handleTitle2}>
          Login now
        </button>
      </NavLink>

      <button className="sign__up--btn">Sign up</button>
    </form>
  );
};

export default Register;

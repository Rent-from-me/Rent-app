import React from "react";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import "./Discover.css"


const Discover = () => {
  return (
    <div className="discover main__box">
      <h1 >Discover Renter Experiences</h1>
      <div className="composition">
        <div className="composition__left">
          <div className="composition__left--info">
            <h1>Post your Item and get a client</h1>
            <Button className="button">Get a client</Button>
          </div>
        </div>
        <div className="composition__right">
          <div className="composition__left--info">
            <h1>Get a item , Rent and enjoyed</h1>
            <Button className="button">Rent a item</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;

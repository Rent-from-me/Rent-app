import React from 'react';
import "./RentNow.css"
import Button from "@mui/material/Button";
import { NavLink } from 'react-router-dom';

const RentNow = () => {
  return (
    <div className="rent__now">
      <div className="rent__now__info">
        <h1>Rent Renter for an item </h1>
        <NavLink to="/RentList" className="link">
          <Button className="btn fs-4 mt-2" variant="contained" l>
            Rent Now
          </Button>
        </NavLink>
      </div>
      <div className="rent__now__images">
        <img
          src="https://bit.ly/3ATe2L4"
          alt="img"
          className=" images image-1  shadow"
        />
        <img
          src="https://bit.ly/3HREOGm"
          alt="img"
          className=" images image-2  shadow"
        />
        <img
          src="https://bit.ly/34ZAvdy"
          alt="img"
          className=" images image-3  shadow"
        />
      </div>
    </div>
  );
};

export default RentNow;

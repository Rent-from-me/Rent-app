import React from 'react';
import "./RentNow.css"
import Button from "@mui/material/Button";
import { NavLink } from 'react-router-dom';

const RentNow = () => {
  return (
    <div className="rentnow">
      <img src="https://bit.ly/3ATe2L4" alt="img" />
      <div className="rentnow__info">
        <NavLink to="/RentList">
          <Button className="btn fs-4" variant="contained" l>
            Rent Now
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default RentNow;

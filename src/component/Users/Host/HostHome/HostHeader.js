import React from 'react';
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import NewItem from '../NewItemHost/NewItem';

const HostHeader = () => {
  return (
    <div className="d-flex">
      <NavLink to="/Host" className="link">
        <Button variant="outlined" className="fs-5 me-3">
          HostItem
        </Button>
      </NavLink>
      <NavLink to="/New" className="link">
        <Button variant="outlined" className="fs-5 me-3">
          Additem
        </Button>
      </NavLink>
      <NavLink to="/Chat" className="link">
        <Button variant="outlined" className="fs-5 ">
          Message
        </Button>
      </NavLink>
    </div>
  );
};

export default HostHeader;

import { Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const ProfileHeader = () => {
  return (
    <div className="d-flex">
      <NavLink to="/Profile" className="link">
        <Button variant="outlined" className="fs-5 me-3">
          Profile
        </Button>
      </NavLink>
      <NavLink to="/ProfileRentItem" className="link">
        <Button variant="outlined" className="fs-5 me-3">
          Rentitems
        </Button>
      </NavLink>
    </div>
  );
};

export default ProfileHeader;

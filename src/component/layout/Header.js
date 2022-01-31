import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import "./Header.css"
import Avatar from "@mui/material/Avatar";
// you can must deleted  this feel free (just for starting purpose just retrun code) 

const Header = () => {
  return (
    <div>
      <ul className="nav nav-pills nav-fill m-2 shadow-sm p-3 mb-5 bg-body rounded thrid-heading">
        <li className="nav-item">
          <NavLink activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item"></li>
        <li className="nav-item">
          <NavLink activeClassName="active" to="/RentList">
            RentList
          </NavLink>
        </li>
        <li className="nav-item">
          <Link to="/Auth">
            <Avatar
              alt="Remy Sharp"
              src={require(`../../asset/camer5.jpg`)}
              sx={{ width: 24, height: 24 }}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

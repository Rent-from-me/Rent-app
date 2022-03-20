import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
// import Avatar from "@mui/material/Avatar";

import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar, useSlider } from "@mui/material";
import { useSelector } from "react-redux";

const Header = (props) => {
  const [open, setOpen] = useState(false)
  
  const handleClickOpen = () => {
    setOpen(!open);
  };
  
  return (
    <header className="header fs-4 shadow-sm mb-4">
      <div className="header_box">
        <Link to="/">
          <img
            src={require(`../../asset/logo.png`)}
            alt="logo"
            className="header__logo"
          />
        </Link>

        <div className="header__center d-flex align-items-center">
          <input type="text" placeholder="Searching...." className="fs-4" />
          <SearchIcon className="fs-1" />
        </div>
      </div>
      
      <div className="header_content">
        <div className="header__right d-flex align-items-center justify-content-between">
          <h4 className="fs-4 me-3">
            <NavLink to="/Host" className="link">
              Become a host
            </NavLink>
          </h4>
          <LanguageIcon className="fs-1  me-2" />
          <ExpandMoreIcon className="fs-1 me-2" onClick={handleClickOpen} />
          {open && (
            <selection>
              <option value onClick={props.children.props.logout}>Logout</option>
            </selection>
            // <div className="logout_com shadow-lg">
            //   <h4 >Log out</h4>
            // </div>
          )}

          <NavLink to="/Profile">
            <Avatar className="fs-1 header_profile" src="" />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;

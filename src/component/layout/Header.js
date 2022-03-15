import React from 'react';
import { NavLink,Link} from 'react-router-dom';
import "./Header.css"
// import Avatar from "@mui/material/Avatar";

import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, useSlider } from '@mui/material';
import { useSelector } from 'react-redux';

const Header = () => {
  const profileImg = useSelector((state) => state.RentReducer.profile.img);
  
  return (
    <header className="header  d-flex align-items-center justify-content-between fs-4 shadow-sm mb-4">
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

      <div className="header__right d-flex me-5 align-items-center justify-content-between">
        <h4 className="fs-4 me-3">
          <NavLink to="/Host" className="link">
            Become a host
          </NavLink>
        </h4>
        <LanguageIcon className="fs-1  me-2" />
        <ExpandMoreIcon className="fs-1 me-2" />
        <NavLink to="/Profile">
          <Avatar className="fs-1" src={profileImg} />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;

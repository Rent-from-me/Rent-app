import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

// you can must deleted  this feel free (just for starting purpose just retrun code) 

const Header = () => {
  return (
    <div>
      <ul class="nav nav-pills nav-fill m-2 shadow-sm p-3 mb-5 bg-body rounded">
        <li class="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li class="nav-item"></li>
        <li class="nav-item">
          <Link to="/RentList">RentList</Link>
        </li>
        <li class="nav-item">
          <Link to="/Auth">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

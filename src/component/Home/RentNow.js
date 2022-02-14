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
    // <div className="container-fluid  my-5">
    //   <div class="row">
    //     <div class="col">
    //       <div className="rentnow__info ">
    //         <div>
    //           Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    //           Doloremque modi hic voluptas consectetur tempore voluptate
    //           perferendis impedit molestias necessitatibus reprehenderit. Dicta
    //           asperiores temporibus maxime ?

    //     </div>
    //     <div class="col">

    //     </div>
    //   </div>
    // </div>
    // <div className="rentnow">
    //   <img src="https://bit.ly/3ATe2L4" alt="img" />

    // </div>
  );
};

export default RentNow;

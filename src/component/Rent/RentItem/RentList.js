import React, { useState } from "react";
import { Link } from "react-router-dom";
import RentItem from "./RentItem";
import "./RentList.css"

const RentList = (props) => {
  return (
    <div className="rent-list">
      <h1 className="primary-heading ms-4">Rent List</h1>
      <div className="d-flex justify-content-center flex-wrap mt-5">
        {props.data.map((i) => (
          <Link to={`/RentItemInfo/${i.id}`} key={i.id} >
            <RentItem i={i} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RentList;

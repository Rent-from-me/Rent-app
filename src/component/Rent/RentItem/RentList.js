import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RentItem from "./RentItem";
import "./RentList.css"

const RentList = () => {
   const rent = useSelector(state => state.HostItem)
   console.log(rent);
  return (
    <div className="rent-list ps-4">
      <h1 className="primary-heading ms-4">Rent List</h1>
      <div className="d-flex justify-content-center flex-wrap mt-5">
        {rent.map(item =>
          <Link to={`/RentItemInfo/${item.id}`} key={item.id} className="link">
            <RentItem {...item} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default RentList;

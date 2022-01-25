import React from 'react';
import img from "../../asset/camer1.jpg";
import "./RentItem.css"
import {FavoriteBorderOutlined} from "@mui/material";

const RentItem = () => {
  return (
    <div className="rent__item ">
      <span>{FavoriteBorderOutlined}</span>
      <img src={img} className="rent__item-img" alt="IMG" />
      <div className="pt-1 rent__item-detial d-flex justify-content-between">
        <h5 className="text-capitalize ">item name </h5>
        <h5>price</h5>
      </div>
      <div className="pt-1 rent__item-detial rent__item-detial-2 d-flex justify-content-between">
        <p className="text-capitalize ">
          ⭐ <span> 4.5 review</span>
        </p>
        <p>Date</p>
      </div>
    </div>
  );
};

export default RentItem;

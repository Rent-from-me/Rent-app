import React from "react";
import "./RentItem.css";


const RentItem = ({ img_url, title, daily_cost, created_at }) => {
  
  return (
    <div className="rent__item me-4 mb-4 rounded">
      <img src={img_url} className="rent__item-img rounded" alt="IMG" />
      <div className="mx-4 d-flex justify-content-between">
        <h5 className="text-capitalize thrid-heading pt-4">{title} </h5>
        <h5 className="thrid-heading pt-4">
          ${daily_cost}/<span className="fs-5">day</span>
        </h5>
      </div>
      <div className="my-2   mx-4 rent__item-detial-2 d-flex justify-content-between">
        <p className="text-capitalize fs-5">
          ⭐ <span>1</span>
        </p>
        <p className="text-capitalize fs-5">{created_at}</p>
      </div>
    </div>
  );
};

export default RentItem;

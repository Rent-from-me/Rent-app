import React from "react";
import "./RentItem.css";


const RentItem = ({id,img,title,price,review,date}) => {
 
  return (
    <div className="rent__item me-4 mb-4 rounded">
      <img
        src={img.main}
        className="rent__item-img rounded"
        alt="IMG"
      />
      <div className="mx-4 d-flex justify-content-between">
        <h5 className="text-capitalize thrid-heading pt-4">{title} </h5>
        <h5 className="thrid-heading pt-4">
          ${price}/<span className="fs-5">day</span>
        </h5>
      </div>
      <div className="my-2   mx-4 rent__item-detial-2 d-flex justify-content-between">
        <p className="text-capitalize fs-5">
          ⭐ <span>{review}</span>
        </p>
        <p className="text-capitalize fs-5">{date}</p>
      </div>
    </div>
  );
};

export default RentItem;

import React from "react";
import "./RentItem.css";
import Heart from "@material-ui/icons/FavoriteTwoTone";

const RentItem = (props) => {
  const { img, title, price, review, date, id } = props.i;

  return (
    <div className="rent__item ">
      <img
        src={require(`../../asset/camer${id}.jpg`)}
        className="rent__item-img"
        alt="IMG"
      />

      <div className="rent__item-profile p-3">
        <div class="avatar ">
          <img
            class="avatar__image"
            src={require(`../../asset/camer${id}.jpg`)}
          />
        </div>
        <h5 className="text-capitalize thrid-heading ms-2">{title} </h5>
        <Heart className="fs-1 icon-heart" color="white" />
      </div>
      <div className="pt-2 rent__item-detial d-flex justify-content-between">
        <h5 className="text-capitalize thrid-heading pt-4">{title} </h5>
        <h5 className="thrid-heading pt-4">
          ${price}/<span className="fs-5">day</span>
        </h5>
      </div>
      <div className="mt-2 rent__item-detial rent__item-detial-2 d-flex justify-content-between">
        <p className="text-capitalize ">
          ⭐ <span>{review}</span>
        </p>
        <p className="text-capitalize">{date}</p>
      </div>
    </div>
  );
};

export default RentItem;

import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import StarIcon from "@mui/icons-material/Star";
import "./HostItem.css";
import { deleteItem } from "../../../../store/Actions/RentActions";
import { useDispatch } from "react-redux";

const HostItem = ({ title, img, price, desc, review, id }) => {
  // console.log(title, img, price, desc, review, id);
  const dispatch = useDispatch();
  
  const removeItem = (e) => {
    dispatch(deleteItem(e))
  }
  return (
    <div className="host__item" onClick={() => removeItem(id)} >
      <img src={img.main} alt="img" />
      <FavoriteBorderOutlinedIcon className="host__item__heart fs-2" />

      <div className="host__item__info">
        <div className="host__item__infoTop">
          <h3 className="fs-2 text-capitalize">{title}</h3>
          <p>____</p>
          <p className="fs-4">{desc}</p>
        </div>

        <div className="host__item__infoBottom">
          <div className="host__item__stars">
            <StarIcon className="host__item__star fs-2" />
            <strong className="fs-4">{review}</strong>
          </div>
          <div className="host__items__price">
            <h3>{price}/day</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostItem;

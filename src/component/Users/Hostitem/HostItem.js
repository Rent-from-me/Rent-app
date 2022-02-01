import React from 'react';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import StarIcon from "@mui/icons-material/Star";
import "./HostItem.css"

const HostItem = ({title,price,desc,review}) => {

      
    // const {item} = props.host

    const n = Math.floor(Math.random() * 5 + 1) 

  return (
    <div className="host__item">
      <img src={require(`../../../asset/camer${n}.jpg`)} alt="img" />
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
            <h2>{price}/day</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostItem;

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProfileHeader from "../profile/ProfileHeader";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import StarIcon from "@mui/icons-material/Star";
import Rating from "../../Rentinfo/Reviewer/Rating";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

import "./UserRentItem.css";
import { useDispatch } from "react-redux";
import {
  deleteRental,
  Rentals,
  updateRental,
} from "../../../store/Actions/userAction/UserAction";
import { FechRentList } from "../../../store/Actions/rentListAction/RentListAction";

//update
const UserRentItem = () => {
  const dispatch = useDispatch();
  const rentalItemchecker = useSelector(
    (state) => state.UserReducer.userRentItem
  );
  useEffect(() => {
    dispatch(FechRentList());
  });

  const items = useSelector((state) => state.FetchRentListReducer.rentitem);

  useEffect(() => {
    dispatch(Rentals());
  });
  
  const rentalDelchecker = useSelector(
    (state) => state.UserReducer.rentalDelete
  );
   

  const rentItems = useSelector((state) => state.UserReducer.userRental);

  const store = JSON.parse(localStorage.getItem("login"));

  const userRentItems = rentItems.filter(
    (item) => item.renter_id === store.userId
  );
  const userRent = [];

  for (let i = 0; i < userRentItems.length; i++) {
    const rental = userRentItems[i];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      item.owner_id === rental.owner_id &&
        item.title === rental.title &&
        userRent.push({...item,rentalId : rental.id});
    }
  }

  console.log(" disp", userRent);
  console.log("rent ", userRentItems);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

   const cancel = (e) => {
     console.log("run delete");
     dispatch(deleteRental(e));
   };
  
  return (
    <div className="main__box">
      <ProfileHeader />
      {userRentItems.length > 0 ? (
        userRent.map((item) => (
          <div className="hostitem__con">
            <div className="hostitem">
              <div className="hostitem__box">
                <img
                  src={item.img_url}
                  alt="img"
                  className="hostitem__box--img"
                />
              </div>
              <div className="hostitem__center"></div>
              <div className="hostitem__info">
                <div className="hostitem__info__header">
                  <h1>{item.title}</h1>
                  <h3>
                    ${item.daily_cost}/<span>day</span>
                  </h3>
                </div>
                <p className="hostitem__info--line">___________</p>
                <div className="hostitem__info__detial">
                  <p>{`${item.description.slice(0, 200).concat("...")}`}</p>
                </div>
                <div className="hostitem__control">
                  <p className="hostitem__control--star">
                    <StarIcon className="hostitem__icon" />{" "}
                    <span>{item.make}</span>
                  </p>
                  <div className="hostitem__control__btns">
                    <button
                      className="hostitem__control__btn hostitem__control__btn--update"
                      onClick={handleClickOpen}
                    >
                      Rate
                    </button>
                    <button
                      className="hostitem__control__btn hostitem__control__btn--delete"
                      onClick={() => cancel(item.rentalId)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              <div className="hostitem__center"></div>
              //{" "}
              {open && (
                <Rating
                  {...item}
                  open={handleClickOpen}
                  close={handleClose}
                  state={open}
                />
              )}
            </div>
          </div>
        ))
      ) : (
        <div class="no-comment mt-5">
          <div>
            <WarningAmberIcon className="icon-warn me-2 fs-2" />
            wali wax alaaba ah maad kiraysan
          </div>
          <NavLink to="/RentList" className="link">
            <Button className="btn__now fs-4 mt-2 " variant="contained">
              Rent Now
            </Button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default UserRentItem;

// https://medium.com/geekculture/22-sliding-form-for-website-3dd98b5e0ba6

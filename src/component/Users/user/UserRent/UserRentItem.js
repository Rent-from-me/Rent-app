import React,{useState} from "react";
import { useSelector } from "react-redux";
import ProfileHeader from "../profile/ProfileHeader";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import StarIcon from "@mui/icons-material/Star";
import Rating from "../../../Rent/Rentinfo/Reviewer/Rating";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

import "./UserRentItem.css"
import { useDispatch } from "react-redux";
import { deleteUser } from "../../../../store/Actions/RentActions";



const UserRentItem = () => {
  const rentItem = useSelector((state) => state.RentReducer.rentItem);
   const [open, setOpen] = useState(false);

   const handleClickOpen = () => {
     setOpen(true);
   };

   const handleClose = () => {
     setOpen(false);
   };
   
   const dispath = useDispatch()
   
   const cancel = (e) => {
     dispath(deleteUser(e));
   }
  return (
    <div className="main__box">
      <ProfileHeader />
      {rentItem.length > 0 ? (
        rentItem.map((item) => (
          <div className="hostitem__con">
            <div className="hostitem">
              <div className="hostitem__box">
                <img
                  src={item.img.main}
                  alt="img"
                  className="hostitem__box--img"
                />
              </div>
              <div className="hostitem__center"></div>
              <div className="hostitem__info">
                <div className="hostitem__info__header">
                  <h1>{item.title}</h1>
                  <h3>
                    ${item.price}/<span>day</span>
                  </h3>
                </div>
                <p className="hostitem__info--line">___________</p>
                <div className="hostitem__info__detial">
                  <p>{item.desc}</p>
                </div>
                <div className="hostitem__control">
                  <p className="hostitem__control--star">
                    <StarIcon className="hostitem__icon" />{" "}
                    <span>{item.review}</span>
                  </p>
                  <div className="hostitem__control__btns">
                    <button
                      className="hostitem__control__btn hostitem__control__btn--update"
                      onClick={handleClickOpen}
                    >
                      Rate
                    </button>
                    <button className="hostitem__control__btn hostitem__control__btn--delete" onClick={() => cancel(item.id)}>
                      cancel
                    </button>
                  </div>
                </div>
              </div>

              <div className="hostitem__center"></div>
            </div>
            {open && (
              <Rating
                {...item}
                open={handleClickOpen}
                close={handleClose}
                state={open}
              />
            )}
          </div>
        ))
      ) : (
        <div class="no-comment mt-5">
          <div>
            <WarningAmberIcon className="icon-warn me-2 fs-2" />
            wali wax alaaba ah maad kiraysan
          </div>
          <NavLink to="/RentList" className="link">
            <Button className="btn__now fs-4 mt-2 " variant="contained" l>
              Rent Now
            </Button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default UserRentItem;

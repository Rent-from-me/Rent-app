import React, { useEffect, useState } from "react";
import ProfileHeader from "./ProfileHeader";
import "./Profile.css";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import { NavLink } from "react-router-dom";
import ProfileEdit from "./ProfileEdit";
import { deleteUser, getUser, updateUser } from "../../../store/Actions/userAction/userSettingAction";


const Profile = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const rentItems = useSelector((state) => state.UserReducer.userRental);
  // console.log(rentItems);
  
   const updateUser = useSelector((state) => state.UserSettingReducer.update);
   
  const dispatch = useDispatch();
  
  useEffect(() => {
   dispatch(getUser(store.userId))
  },[updateUser]);
  
  const user = useSelector((state) => state.UserSettingReducer.user);

  const store = JSON.parse(localStorage.getItem("login"));
  
  // useEffect(() => {
  //   DeleteUser();
  // },[]);
  
  // const DeleteUser = () => {
  //   dispatch(deleteUser(store.userId));
  //   props.logout()
  // } 

  // const userRentItems = rentItems.filter(
  //   (item) => item.renter_id === store.userId
  // );

  const { first_name, last_name, updated_at,img} = user;
  // const date = new Date(created_at);
  
  console.log(user);
  return (
    <div className="main__box  ">
      <ProfileHeader />
      <div className="profile">
        <div className="profile_img_upload">
          <Avatar
            src={img ? img : ""}
            alt="t"
            style={{ height: 10 + "rem", width: 10 + "rem" }}
          />
          <input type="file" id="upload" />
          <label htmlFor="upload" className="fs-3">
            Upload image
          </label>
          <div className="profile__info">
            <h2>{store.msg}</h2>
            <p className="fs-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
              corporis, quam dolores ipsa deserunt eveniet. Dicta adipisci
              possimus ducimus officia.
            </p>
          </div>
          <NavLink to="/">
            <p className="fs-4">Go Home</p>
          </NavLink>
        </div>

        <div className="profile__detial">
          <h1>Hi, I’m {first_name}</h1>
          <p className="profile__detial-join">Joined in 2022</p>

          <h5
            className="pt-4 fs-4 text-decoration-underline"
            onClick={handleClickOpen}
          >
            Edite profile
          </h5>
          <ProfileEdit
            open={handleClickOpen}
            close={handleClose}
            state={open}
          />
          <div className="border-bottom border-top py-4  px-4 mt-5 profile_detial_login">
            <button onClick={props.logout} className=" profile_logout">
              Login out
            </button>
            <h4 className="Danger" onClick={deleteUser}>
              Delete account
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

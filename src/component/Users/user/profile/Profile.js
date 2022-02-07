import React from 'react';
import ProfileHeader from "./ProfileHeader"
import './Profile.css'
import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector((state) => state)
  
  const { name, img, location, dateJoined } = user.profile;

  return (
    <div className="main__box  ">
      <ProfileHeader />
      <div className="profile">
        <div className="profile_img_upload">
          <img
            src={img}
            alt=""
          />
          <input type="file" id="upload" />

          <label htmlFor="upload" className="fs-3">
            Upload image
          </label>
        </div>

        <div className="profile__detial">
          <p className="fs-2 shadow ">
            <strong className="text-capitalize ">name</strong> : {name}
          </p>
          <p className="fs-2 shadow ">
            <strong className="text-capitalize ">Location</strong> : {location}
          </p>
          <p className="fs-2 text-capitalize shadow ">
            <strong>dateJoined</strong> : {dateJoined}
          </p>
          <p className="fs-2 text-capitalize shadow ">
            <strong>rentitem</strong> : {user.rentItem.length}
          </p>
          <p className="fs-2 text-capitalize shadow ">
            <strong>hosted item</strong> : {user.HostItem.length}
          </p>
          <p className="fs-2 text-capitalize shadow ">
            <strong>review</strong> : 3
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

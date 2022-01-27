import React from 'react';
import './ProfileRenter.css'
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfileRenter = (props) => {
  const { id, title } = props.data;
  return (
    <div className="rent__item-profile p-3">
      <div class="avatar ">
        <img
          class="avatar__image"
          src={require(`../../../asset/camer${id}.jpg`)}
        />
      </div>
      <h5 className="text-capitalize thrid-heading ms-2">{title} </h5>
      <div className="icon-heart">
        <FontAwesomeIcon icon={faDoorOpen} className="icon" />
      </div>
    </div>
  );
};

export default ProfileRenter;

import React from 'react';
import "./Reviewer.css";
import Avatar from "@mui/material/Avatar";

// dispayed img RenterInfo 
const Comment = ({name,date,comment,img}) => {
  
  return (
    <div className="reviewer__box my-4" key={name}>
      <section className="d-flex align-items-center  mb-3 ">
        <div class="avatar-renter ">
          <Avatar
            alt="Remy Sharp"
            src={img}
            sx={{ width: 56, height: 56 }}
          />
        </div>

        <div>
          <h5 className="text-capitalize thrid-heading ms-3 fs-3">{name}</h5>
          <h5 className="text-capitalize ms-3">{date}</h5>
        </div>
      </section>
      <p className="text-capitalize ms-3 fs-4">{comment}</p>
    </div>
  );
};

export default Comment;

import React from 'react';
import "./RenterInfo.css"
import Calendar from "react-calendar";

const RenterInfo = (props) => {
    const { id, title, date, desc} = props.data;
  return (
    <section>
      <section className="d-flex align-items-center mb-3">
        <div class="avatar-renter ">
          <img
            class="avatar__image"
            src={require(`../../../asset/camer${id}.jpg`)}
          />
        </div>
        <div>
          <h5 className="text-capitalize thrid-heading ms-3">{title} </h5>
          <h5 className="text-capitalize ms-3">{date}</h5>
        </div>
      </section>
      <section>
        <p className='fs-4'>{desc}</p>
        <div>
            <Calendar/>
        </div>
      </section>
    </section>
  );
};

export default RenterInfo;

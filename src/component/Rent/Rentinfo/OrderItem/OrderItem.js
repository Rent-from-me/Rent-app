import React, { useEffect, useState } from "react";
import ModalOrder from "./ModalOrder";
import "./OrderItem.css";



const OrderItem = (props) => {
  const {price } = props.data;
  
  const [checkin,setCheckin] = useState("")
  const [checkout,setCheckout] = useState("")
  const [location,setLocation] = useState("")
  const [open, setOpen] = useState(false);
  
  const handleClickOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };
    const handleClose = () => {
      setOpen(false);
    };
    
  const checkIn = (event) => {
      const check = new Date(event.target.value);
      const checkTime = check.getTime();
      setCheckin(checkTime);
  }
  
  const checkOut = (event) => {
    const check = new Date(event.target.value);
    const checkTime =  check.getTime();
    setCheckout(checkTime);
  }
  const checkLocation = (event) => {
    setLocation(event.target.value);
  }
  
  
  const InTime = checkout - checkin;
  const InDays = InTime / (1000 * 3600 * 24);


  return (
    <form className="fs-4 " onSubmit={handleClickOpen}>
      <h5 className="thrid-heading pt-4 mt-3 ">
        <span className="fs-1">${price}</span>/<span className="fs-4">day</span>
      </h5>
      <label
        htmlFor=""
        className="check p-3 rounded-start my-3 text-capitalize "
      >
        <p>check in </p>
        <input
          type="date"
          name="date"
          className="form_input"
          onChange={checkIn}
        />
      </label>

      <label htmlFor="" className="check p-3 rounded-end text-capitalize ">
        <p>check out </p>
        <input
          type="date"
          name="date"
          className="form_input"
          onChange={checkOut}
        />
      </label>
      <div class="input-group mb-3 f2 mt-2">
        <input
          type="text"
          class="form-control p-3 fs-4"
          id="basic-url"
          placeholder="Enter Your Location"
          aria-describedby="basic-addon3"
        />
      </div>

      <button className="fs-2 form_btn mt-4 shadow-sm rounded-pill py-2">
        Rent
      </button>

      <div className="d-flex justify-content-between mb-3 mt-4 total text-capitalize ">
        <h4>total</h4>
        <h4>${InDays <= 0 ? price : price * InDays}</h4>
      </div>
      {open && <ModalOrder Open={handleClickOpen} Close={handleClose} data={props.data} days ={InDays}/>}
    </form>
  );
};

export default OrderItem;

import { ownerWindow } from "@mui/material";
import React, { useEffect, useState } from "react";
import ModalOrder from "./ModalOrder";
import "./OrderItem.css";

const dateReader = (date) => {
  const year = date.getFullYear().toString();
  const day = date.getDate().toString();
  const month = date.getMonth();
  const fullDate = `${day} - ${month} - ${year}`;
  return fullDate;
};

const OrderItem = (props) => {
  const { daily_cost, owner_id,id } = props.data;

  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [location, setLocation] = useState("");
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
    setStart(dateReader(check));
    setCheckin(checkTime);
  };



  const checkOut = (event) => {
    const check = new Date(event.target.value);
    const checkTime = check.getTime();
    setCheckout(checkTime);
    setEnd(dateReader(check))
  };
  const checkLocation = (event) => {
    setLocation(event.target.value);
  };

  const InTime = checkout - checkin;
  const InDays = InTime / (1000 * 3600 * 24);
  const total = InDays * daily_cost;

  const openModel = () => {
    return checkin && checkout && location;
  };
  const store = JSON.parse(localStorage.getItem("login"));

  const data = {
    start_date: start,
    end_date: end,
    total_cost: total,
    tool_id: owner_id,
    renter_id: store.userId,
  };
  
    console.log(data);
  return (
    <form className="fs-4 " onSubmit={handleClickOpen}>
      <h5 className="thrid-heading pt-4 mt-3 ">
        <span className="fs-1">${daily_cost}</span>/
        <span className="fs-4">day</span>
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
        <h4>${InDays <= 0 ? daily_cost : daily_cost * InDays}</h4>
      </div>

      {open && (
        <ModalOrder
          Open={handleClickOpen}
          Close={handleClose}
          days = {InDays}
          data={props.data}
          item={data}
        />
      )}
    </form>
  );
};

export default OrderItem;

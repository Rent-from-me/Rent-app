import React from "react";
import "./OrderItem.css";

const OrderItem = (props) => {
  const { review, reviewer } = props.data;

  return (
    <form className="fs-4 text-capitalize  ">
      <h4 className="mt-3">
        ⭐ {review} ･ {reviewer} reviewer
      </h4>
      <label htmlFor="" className="check p-3 rounded-start my-3">
        <p>check in </p>
        <input type="date" name="date" className="form_input" />
      </label>

      <label htmlFor="" className="check p-3 rounded-end">
        <p>check out </p>
        <input type="date" name="date" className="form_input" />
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

      <div className="d-flex justify-content-between mb-3 mt-4 total ">
        <h4>total</h4>
        <h4>$2000</h4>
      </div>
    </form>
  );
};

export default OrderItem;

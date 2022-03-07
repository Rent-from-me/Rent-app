import React, { useState } from "react";
import "./Rating.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch, useSelector } from "react-redux";
import { rateItem } from "../../../store/Actions/RentActions";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";


const init = {
  star: 0,
  comment: "",
  date: new Date(),
};

const Rating = (props) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

    const date = new Date();
    const year = date.getFullYear().toString();
    const d = date.getDate().toString();
    const options = { month: "long" };
    const M = new Intl.DateTimeFormat("en-US", options)
      .format(date)
      .toLowerCase()
      .slice(0, 3);
      ;
    const fullDate = M + "-" + d + "-" + year;
    console.log(fullDate);

    
    

  const [rating, setRating] = useState(init);

  rating.star = currentValue;
  rating.date = fullDate;

  const data = useSelector((state) => state);
  console.log(data);

  // const item = data.HostItem.find((item) => (item.id === props.id ? item : null));

  // console.log(item);
  const dispatch = useDispatch();

  const addRating = (e) => {
    dispatch(rateItem(e, props.id));
  };

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleChange = (e) => {
    const comment = { ...rating, [e.target.name]: e.target.value };
    setRating(comment);
  };

  const submitHadle = (e) => {
    e.preventDefault();
    addRating(rating);
    setRating(init)
    setHoverValue(undefined)
    setCurrentValue(0)
    props.close();
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
            <form className="rating" onSubmit={submitHadle}>
              <h1> React Ratings </h1>
              <div>
                {stars.map((_, index) => {
                  return (
                    <StarIcon
                      key={index}
                      onClick={() => handleClick(index + 1)}
                      onMouseOver={() => handleMouseOver(index + 1)}
                      sx={{ width: 30, height: 30 }}
                      onMouseLeave={handleMouseLeave}
                      className={`rating__color
                  ${
                    (hoverValue || currentValue) > index
                      ? "rating__color__hover"
                      : ""
                  }
                `}
                    />
                  );
                })}
              </div>
              <textarea
                placeholder="What's your experience?"
                name="comment"
                className="fs-3"
                onChange={(e) => handleChange(e)}
                value={rating.comment}
              />

              <button >Submit</button>
            </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Rating;

import React, { useState } from "react";
import "./Rating.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import {rateItem} from "../../../../store/Actions/RentActions"
import { useDispatch } from "react-redux";

const Rating = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const [rating, setRating] = useState({
    star: 0,
    comment: "",
    date: new Date(),
  });

  rating.star = currentValue;

  const dispatch = useDispatch();
  
  const addRating = (e) => {
     dispatch(rateItem(e));
  }
  
  
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
    addRating(rating)
  };

  return (
    <form className="rating" onSubmit={submitHadle}>
      <h1> React Ratings </h1>
      <div>
        {stars.map((_, index) => {
          return (
            <StarBorderIcon
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
        onChange={(e) => handleChange(e)}
        value={rating.comment}
      />

      <button>Submit</button>
    </form>
  );
};

export default Rating;

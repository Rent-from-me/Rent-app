import React,{useState} from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import StarIcon from "@mui/icons-material/Star";
import "./HostItem.css";
import { deleteItem } from "../../../../store/Actions/RentActions";
import { useDispatch } from "react-redux";
import UpdateHostItem from "./UpdateHostItem";

const HostItem = ({ title, img, price, desc, review, id }) => {
  const dispatch = useDispatch();

  const removeItem = (e) => {
    console.log(e);
    dispatch(deleteItem(e));
  };
  
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div className="hostitem__con">
      <div className="hostitem">
        <div className="hostitem__box">
          <img src={img.main} alt="img" className="hostitem__box--img" />
        </div>
        <div className="hostitem__center"></div>
        <div className="hostitem__info">
          <div className="hostitem__info__header">
            <h1>{title}</h1>
            <h3>
              ${price}/<span>day</span>
            </h3>
          </div>
          <p className="hostitem__info--line">___________</p>
          <div className="hostitem__info__detial">
            <p>{desc}</p>
          </div>
          <div className="hostitem__control">
            <p className="hostitem__control--star">
              <StarIcon className="hostitem__icon" /> <span>{review}</span>
            </p>
            <div className="hostitem__control__btns">
              <button
                className="hostitem__control__btn hostitem__control__btn--update"
                onClick={handleClickOpen}
              >
                Update
              </button>
              <button
                className="hostitem__control__btn hostitem__control__btn--delete"
                onClick={() => removeItem(id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>

        <div className="hostitem__center"></div>
        {open && <UpdateHostItem open={handleClickOpen} close={handleClose} state = {open}/>}
      </div>
    </div>
  );
};

export default HostItem;

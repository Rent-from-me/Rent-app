import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import "../../user/profile/./ProfileEdit.css";

import { useDispatch } from "react-redux";
import { updateItem } from "../../../store/Actions/ownerAction/OwnerAction";

const iteminit = {
  title: "",
  description: "",
  make: "",
  model: "",
  daily_cost: "",
  condition: "",
};

const UpdateHostItemEdit = (props) => {
  const [item, setItem] = useState(iteminit);
  console.log(props);
  
  console.log(item);
  const dispatch = useDispatch();
  
  const editeItem = (e) => {
    dispatch(updateItem(props.id, e));
  };

  const hadleChange = (event) => {
    const update = { ...item, [event.target.name]: event.target.value };
    setItem(update);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(item);
    editeItem(item);
    props.close();
    // setItem(iteminit);
  };
  
  // Habits of Efficient Developers

  return (
    <div>
      <Dialog
        open={props.state}
        onClose={props.close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="fs-3"
      >
        <DialogTitle id="alert-dialog-title " className="fs-1 fw-bold">
          Update the Item
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <form action="" className="upaderUser" onSubmit={handleSubmit}>
              <input
                type="text"
                className="upaderUser_input"
                placeholder="updat title"
                name="title"
                value={item.title}
                onChange={hadleChange}
              />
              <input
                type="text"
                className="upaderUser_input"
                placeholder="updat description"
                name="description"
                value={item.description}
                onChange={hadleChange}
              />
              <input
                type="text"
                className="upaderUser_input"
                placeholder="updat make"
                name="make"
                value={item.make}
                onChange={hadleChange}
              />
              <input
                type="text"
                className="upaderUser_input"
                placeholder="updat model"
                name="model"
                value={item.model}
                onChange={hadleChange}
              />
              <input
                type="number"
                className="upaderUser_input"
                placeholder="updat daily cost"
                name="daily_cost"
                value={item.daily_cost}
                onChange={hadleChange}
              />
              <input
                type="text"
                className="upaderUser_input"
                placeholder="update condition"
                name="condition"
                value={item.condition}
                onChange={hadleChange}
              />

              <button
                type="button"
                onClick={handleSubmit}
                className="fs-4 updateUser_btn mt-3"
              >
                Update
              </button>
            </form>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateHostItemEdit;

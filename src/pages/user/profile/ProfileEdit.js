import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./ProfileEdit.css";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../store/Actions/userAction/userSettingAction";
import { Box } from "@mui/material";


const userinit = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
};

const ProfileEdit = (props) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(userinit);

  const update_User = (e) => {
    const store = JSON.parse(localStorage.getItem("login"));
    dispatch(updateUser(store.userId, e));
  };

  const hadleChange = (event) => {
    const update = { ...user, [event.target.name]: event.target.value };
    setUser(update);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    update_User(user);
    setUser(userinit);
  };

  return (
    <div className="edite-box ">
        <Dialog
          open={props.state}
          onClose={props.close}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          className="fs-3"
        >
          <DialogTitle id="alert-dialog-title " className="fs-1 fw-bold">
            Update your profile
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div>
                <form
                  action="Put"
                  className="upaderUser"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="text"
                    className="upaderUser_input"
                    placeholder="updat frist name"
                    name="first_name"
                    value={user.first_name}
                    onChange={hadleChange}
                  />
                  <input
                    type="text"
                    className="upaderUser_input"
                    placeholder="updat lastname name"
                    name="last_name"
                    value={user.last_name}
                    onChange={hadleChange}
                  />
                  <input
                    type="email"
                    className="upaderUser_input"
                    placeholder="updat email"
                    name="email"
                    value={user.email}
                    onChange={hadleChange}
                  />
                  <input
                    type="text"
                    className="upaderUser_input"
                    placeholder="password"
                    name="password"
                    value={user.password}
                    onChange={hadleChange}
                  />
                  <DialogActions>
                    <button
                      onClick={props.close}
                      className="fs-4 updateUser_btn"
                    >
                      save
                    </button>
                  </DialogActions>
                </form>
              </div>
            </DialogContentText>
          </DialogContent>
        </Dialog>
    </div>
  );
};

export default ProfileEdit;

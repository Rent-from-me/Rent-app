import React, { forwardRef } from 'react';
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import "./ModalOrder.css"

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModalOrder = (props) => {
   const {title , price , id} = props.data;
   const Total = price * props.days
  return (
    <div>
      <Dialog
        open={props.Open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.Close}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className="fs-1 text-capitalize">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            className="fs-4 "
          >
            <div className="d-flex  align-items-center ">
              <div className="modal_box me-3">
                <img
                  src={require(`../../../../asset/camer${id}.jpg`)}
                  alt="img"
                  className="modal_img rounded"
                />
              </div>
              <h2>
                are sure to rent this {title}  in {props.days} days and
                their amount rent is and that day is ${Total}
              </h2>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.Close} className="fs-4">
            Cancle
          </Button>
          <Button onClick={props.Close} className="fs-4">
            Rent
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalOrder;

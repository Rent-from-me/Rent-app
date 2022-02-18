import React, { forwardRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useDispatch } from "react-redux";
import { addItemRent } from "../../../../store/Actions/RentActions";
import "./ModalOrder.css";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModalOrder = (props) => {
  const { title, price, id, img } = props.data;
  const Total = price * props.days;
 
  const dispatch = useDispatch();

  const addRentItem = (e) => {
    dispatch(addItemRent(e));
  };

  return (
    <div>
      <Dialog
        open={props.Open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.Close}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className="fs-1 text-capitalize dark color">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            className="fs-43"
          >
            <div className="d-flex  align-items-center ">
              <div className="modal_box me-3">
                <img src={img.main} alt="img" className="modal_img rounded" />
              </div>
              <p className="thrid-heading e color text-start fs-4">
                are sure to rent this {title} in {props.days} days and their
                amount rent is and that day is ${Total}
              </p>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.Close} className="fs-5">
            Cancle
          </Button>
          <Button
            type="submit"
            onDoubleClick={props.Close}
            onClick={() => addRentItem(props.data)}
            className="fs-5"
          >
            Rent
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalOrder;

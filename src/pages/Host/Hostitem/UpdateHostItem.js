import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// only testing
import TitleIcon from "@mui/icons-material/Title";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useDispatch, useSelector } from "react-redux";
import { updateItem } from "../../../store/Actions/ownerAction/OwnerAction";
// import { updateItem } from "../../../store/Actions/RentActions";


//form initial state
const init = {
  img: {},
  title: "",
  price: "",
  desc: "",
};

const UpdateHostItem = (props) => {
  const [update, setUpdate] = useState(init);

  //upload images
  const [imagesUpload, setImagesUpload] = useState([]);
  const imageUploder = (e) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setImagesUpload((preImage) => preImage.concat(fileArray));
    }

    Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
  };

  //remove upload image u want
  const removeOne = (index) => {
    const remove = imagesUpload.filter((image, i) => i !== index);
    setImagesUpload(remove);
  };

  //get upload image and add to update state
  const img = {
    main: imagesUpload[0],
    sub1: imagesUpload[1],
    sub2: imagesUpload[2],
    sub3: imagesUpload[3],
    sub4: imagesUpload[4],
  };
  update.img = { ...img };

  //connected to redux
  const dispatch = useDispatch();

  const updateHostItem = (e) => {
    dispatch(updateItem(e, props.id));
  };

  //  const data = useSelector((state) => state.HostItem);

  //  const selected = data.find((item) => item.id === props.id);
  //  const [uSeleteced, setUSeleteced] = useState(selected);
  //  console.log(selected);

  //Handles 
  const hadleChange = (event) => {
    const addNew = {
      ...update,
      [event.target.name]: event.target.value,
    };
    setUpdate(addNew);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateHostItem(update);
    setUpdate(init);
    setImagesUpload([])
    props.close();
  };

  console.log(update);

  return (
    <div>
      <Dialog open={props.state} onClose={props.close} className="updatehost">
        <DialogTitle>Upade</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <div className="new__item__con">
            <form
              action=""
              className="new__item__form"
              onSubmit={handleSubmit}
              style={{ width: 50 + "rem" }}
            >
              <div className="form__top">
                <div className="new__item__input">
                  <TitleIcon className="icon" />
                  <input
                    type="text"
                    placeholder="Add title"
                    value={updateItem.title}
                    onChange={hadleChange}
                    name="title"
                  />
                </div>

                <div className="new__item__input">
                  <AttachMoneyIcon className="icon" />
                  <input
                    type="number"
                    name="price"
                    placeholder="Add price"
                    onChange={hadleChange}
                    value={updateItem.price}
                  />
                </div>

                <textarea
                  name="desc"
                  cols="70"
                  rows="4"
                  value={updateItem.desc}
                  placeholder="Add some description"
                  onChange={hadleChange}
                ></textarea>
              </div>

              <div className="form__middle">
                <input
                  type="file"
                  id="file"
                  className="file__upload"
                  onChange={imageUploder}
                  multiple
                />

                <div className="upload__display">
                  <div className="images__upload__con">
                    {imagesUpload &&
                      imagesUpload.map((photo, index) => (
                        <div
                          className="images__upload"
                          key={index}
                          onClick={(e) => removeOne(index)}
                        >
                          <img src={photo} alt="uplood" key={index} />
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              <div className="form__bottom">
                <div className="button">
                  <label htmlFor="file">
                    <div className="btn-grad">upload photo</div>
                  </label>
                </div>
                <button className="btn-grad btn__add">Update Item</button>
              </div>
            </form>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UpdateHostItem;

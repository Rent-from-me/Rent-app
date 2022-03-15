import React, { useState } from "react";
import HostHeader from "../HostHome/HostHeader";
import "./NewItem.css";
import TitleIcon from "@mui/icons-material/Title";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useDispatch } from "react-redux";
import { addItem } from "../../../store/Actions/RentActions";
import { creatItem } from "../../../store/Actions/HostAction";
import { AcUnit, MergeType, QrCode2 } from "@mui/icons-material";

const NewItem = (props) => {
  const dispatch = useDispatch();

  const addNewItem = (e) => {
    dispatch(creatItem(e));
  };

  const [imageUpload, setImageUpload] = useState(null);
  const store = JSON.parse(localStorage.getItem("owner"));
  
  const init = {
    owner_id: null,
    title: "",
    description: "",
    make: "",
    model: "",
    img_url: "",
    daily_cost: null,
    available: true,
    condition: ""
  };
  init.owner_id = store.ownerId;
  
  const [newItem, setNewItem] = useState(init);

  const imageUploader = (e) => {
    const reader = new FileReader();
    console.log(e.target.files);
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[e.target.files.length - 1]);
    }

    reader.onload = (readerEvent) => {
      console.log(readerEvent);
      setImageUpload(readerEvent.target.result);
    };
  };

  const hadleChange = (event) => {
    const addNew = { ...newItem, [event.target.name]: event.target.value };
    setNewItem(addNew);
  };

  newItem.img_url = imageUpload;

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewItem(newItem);
    setImageUpload(null);
    setNewItem(init);
  };

  console.log(newItem);
  return (
    <div className="new__item fs-4">
      <HostHeader />
      <div className="new__item__con">
        <form action="" className="new__item__form" onSubmit={handleSubmit}>
          <div className="form__top">
            <div className="new__item__input">
              <TitleIcon className="icon" />
              <input
                type="text"
                placeholder="Add title"
                onChange={hadleChange}
                value={newItem.title}
                name="title"
              />
            </div>

            <div className="new__item__input">
              <QrCode2 className="icon" />
              <input
                type="text"
                name="make"
                placeholder="Add make compony"
                onChange={hadleChange}
                value={newItem.make}
              />
            </div>

            <div className="new__item__input">
              <MergeType className="icon" />
              <input
                type="text"
                name="model"
                placeholder="Add its model"
                onChange={hadleChange}
                value={newItem.model}
              />
            </div>

            <div className="new__item__input">
              <AttachMoneyIcon className="icon" />
              <input
                type="number"
                name="daily_cost"
                placeholder="Add price"
                onChange={hadleChange}
                value={newItem.daily_cost}
              />
            </div>

            <div className="new__item__input">
              <AcUnit className="icon" />
              <input
                type="text"
                name="condition"
                placeholder="Add its condition"
                onChange={hadleChange}
                value={newItem.condition}
              />
            </div>

            <textarea
              name="description"
              cols="70"
              rows="4"
              value={newItem.description}
              placeholder="Add some description"
              onChange={hadleChange}
            ></textarea>
          </div>

          <div className="form__middle">
            <input
              type="file"
              id="file"
              className="file__upload"
              onChange={(e) => imageUploader(e)}
              multiple
            />

            <div className="upload__display">
              <div className="images__upload__con">
                {imageUpload && (
                  <div className="images__upload">
                    <img src={imageUpload} alt="uplood" />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="form__bottom">
            <div className="button">
              <label htmlFor="file">
                <div className="btn-grad">upload photo</div>
              </label>
              <button className="btn-grad py-4 btn__add">Add Item</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewItem;

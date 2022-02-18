import React, { useState } from "react";
import HostHeader from "../HostHome/HostHeader";
import "./NewItem.css";
import TitleIcon from "@mui/icons-material/Title";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useDispatch } from "react-redux";
import { addItem } from "../../../../store/Actions/RentActions";

const NewItem = (props) => {
  const dispatch = useDispatch()
  
  const addNewItem = (e) => {
    dispatch(addItem(e))
  }
  
  const [imagesUpload, setImagesUpload] = useState([]);
  const init = {
    id: Date.now(),
    img: {},
    title: "",
    location: "",
    comments: [],
    price: "",
    review: 0,
    date: Date.now(),
    reviewer: 0,
    desc: "",
  };
  const [newItem, setNewItem] = useState(init);
  
  const imageUploder = (e) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setImagesUpload((preImage) => preImage.concat(fileArray));
    }
  
    Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
  };

  const removeOne = (index) => {
    const remove = imagesUpload.filter((image, i) => i !== index);
    setImagesUpload(remove);
  };
  
 
  const hadleChange = (event) => {
    const addNew = {...newItem, [event.target.name]: event.target.value}
    setNewItem(addNew)
  } 
    const img = {
      main: imagesUpload[0],
      sub1: imagesUpload[1],
      sub2: imagesUpload[2],
      sub3: imagesUpload[3],
      sub4: imagesUpload[4],
    };
    newItem.img = {...img}
 
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewItem(newItem);
    // setNewItem(init);
  }
  
  console.log(newItem);
  return (
    
    <div className="new__item fs-4">
      <HostHeader />
      <div className="new__item__con">
        <div className="new__item__left__box">
          <h1>add Item Now </h1>
        </div>

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
              <LocationOnOutlinedIcon className="icon" />
              <input
                type="text"
                name="location"
                placeholder="Add Location"
                onChange={hadleChange}
                value={newItem.location}
              />
            </div>

            <div className="new__item__input">
              <AttachMoneyIcon className="icon" />
              <input
                type="number"
                name="price"
                placeholder="Add price"
                onChange={hadleChange}
                value={newItem.price}
              />
            </div>

            <textarea
              name="desc"
              cols="70"
              rows="4"
              value={newItem.desc}
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
                <div className="btn-grad">
                  <AddOutlinedIcon className="fs-1" />
                  upload photo
                </div>
              </label>

              <button className="btn-grad">Add Item</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewItem;

import React from "react";
import RentItem from "./RentItem";
import './RentList.css'

const init = [
  {
    id: 1,
    img: "../../asset/camer1.jpg",
    title: "camera one",
    price: "500",
    review: 1,
    date: "mar-7-21",
  },
  {
    id: 2,
    img: "../../asset/camer2.jpg",
    title: "camera two",
    price: "1,000",
    review: 5,
    date: "mar-7-21",
  },
  {
    id: 3,
    img: "../../asset/camer3.jpg",
    title: "camera three",
    price: "1500",
    review: 2,
    date: "mar-7-21",
  },
  {
    id: 4,
    img: "../../asset/camer4.jpg",
    title: "camera four",
    price: "800",
    review: 4,
    date: "mar-7-21",
  },
];
const RentList = () => {
  return (
    <div className="rent-list ">
      <h1>Rent List</h1>
      <RentItem />
    </div>
  );
};

export default RentList;

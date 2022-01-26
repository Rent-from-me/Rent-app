import React, { useState } from "react";
import { Link } from "react-router-dom";
import RentItem from "./RentItem";
import "./RentList.css"
const init = [
  {
    id: 1,
    img: "../../asset/camer1.jpg",
    title: "camera one",
    price: "50",
    review: 1,
    date: "mar-7-21",
  },
  {
    id: 2,
    img: "../../asset/camer2.jpg",
    title: "camera two",
    price: "12",
    review: 5,
    date: "mar-7-21",
  },
  {
    id: 3,
    img: "../../asset/camer3.jpg",
    title: "camera three",
    price: "37",
    review: 2,
    date: "mar-7-21",
  },
  {
    id: 4,
    img: "../../asset/camer4.jpg",
    title: "camera four",
    price: "8",
    review: 4,
    date: "mar-7-21",
  },
  {
    id: 5,
    img: "../../asset/camer5.jpg",
    title: "camera five",
    price: "800",
    review: 4.5,
    date: "mar-29-21",
  },
];
const RentList = () => {
  const [data,setData] = useState(init)
 
  return (
    <div className="rent-list">
      <h1 className="primary-heading ms-4">Rent List</h1>
      <div className="d-flex justify-content-center flex-wrap mt-5">
        {data.map((i) => (
          <Link to={`/RentItemInfo/${i.id}`} key={i.id} >
            <RentItem i={i} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RentList;

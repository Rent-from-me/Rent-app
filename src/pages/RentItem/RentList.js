import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../component/layout/Loading";
import RentItem from "./RentItem";
import "./RentList.css"


const RentList = () => {
  
  const itemFechStart = useSelector((state) => state. FetchRentListReducer.isLoading);
  const items = useSelector((state) => state. FetchRentListReducer.rentitem);
  
  const itemsError = useSelector((state) => state. FetchRentListReducer.error);
   console.log(items);
  return (
    <>
      <div className="rent-list ps-4">
        <h1 className="primary-heading ms-4">Rent List</h1>
        {itemFechStart ? (
          <Loading />
        ) : (
          <div className="d-flex justify-content-center flex-wrap mt-5">
            {items.map((item) => (
              <Link
                to={`/RentItemInfo/${item.id}`}
                key={item.id}
                className="link"
              >
                <RentItem {...item} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default RentList;

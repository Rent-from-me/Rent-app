import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchItem } from "../../../store/Actions/RentItemAction";
import RentItem from "./RentItem";
import "./RentList.css"



const RentList = () => {
  const itemStart = useSelector((state) => state.FetchItemReducer.isLoading);
  const items = useSelector((state) => state.FetchItemReducer.rentitem);
  const itemsError = useSelector((state) => state.FetchItemReducer.error);
   const rent = useSelector(state => state.RentReducer.HostItem)
   
   const dispatch = useDispatch()
   
   useEffect(() => {
     dispatch(fetchItem())
   },[dispatch])
   
   
   console.log(items);
  return (
    <div className="rent-list ps-4">
      <h1 className="primary-heading ms-4">Rent List</h1>
      <div className="d-flex justify-content-center flex-wrap mt-5">
        {rent.map(item =>
          <Link to={`/RentItemInfo/${item.id}`} key={item.id} className="link">
            <RentItem {...item} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default RentList;

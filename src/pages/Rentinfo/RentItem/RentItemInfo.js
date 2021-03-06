import React from "react";
import { useParams } from "react-router-dom";
import "./RentItemInfo.css";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import RenterInfo from "../Renter/RenterInfo";
import OrderItem from "../OrderItem/OrderItem";
import { useSelector } from "react-redux";


const RentItemInfo = (props) => {

  const params = useParams();
  console.log(params);
  const rentItem = useSelector((state) => state.FetchRentListReducer.rentitem);
  
  
  const selectedItem = rentItem.find((selected) => selected.id === +params.id );
  
  const { id, title, img_url, description ,make} = selectedItem;
  
// GET OWNER NAME 
  
  return (
    <div className="item__info">
      <section className="item__info--header ">
        <h1 className="primary-heading  text-capitalize my-4 ">
          {title}
        </h1>
        <div className="item__info-detail d-flex">
          <h4>
            ⭐ 1 ･ 20 reviewer
          </h4>
          <h4 className="ms-auto">
            make {make}
          </h4>
        </div>
      </section>
      <Box
        sx={12}
        className=" mt-5 mx-auto d-flex item__info_images  overflow-hidden"
        gap={0.7}
      >
        <Grid xs={12} className="item__info-img--main grid rounded-start">
          <img src={img_url} alt="img" className="item__info_img " />
        </Grid>
        {/* <Grid xs={6} className="item-info-img--subs grid d-flex flex-wrap">
          <Grid xs={12} className="d-flex" gap={0.4}>
            <Grid xs={6} className="item-info-img--sub ">
              <img src={img.sub1} alt="img" className="item__info_img" />
            </Grid>
            <Grid xs={6} className="item-info-img--sub">
              <img src={img.sub2} alt="img" className="item__info_img" />
            </Grid>
          </Grid>
          <Grid xs={12} className="d-flex" gap={0.8}>
            <Grid xs={6} className="item-info-img--sub ">
              <img src={img.sub3} alt="img" className="item__info_img" />
            </Grid>
            <Grid xs={6} className="item-info-img--sub">
              <img src={img.sub4} alt="img" className="item__info_img" />
            </Grid>
          </Grid>
        </Grid> */}
      </Box>

      <Box className="d-flex align-items-center rentItem-content">
        <section className="my-5 item__renter-data ">
          <RenterInfo selectedItem={selectedItem} />
        </section>
        
        <section className="mx-auto my-5 item_renter-order shadow-lg p-4 ">
          <OrderItem data={selectedItem} />
        </section>
        
      </Box>
    </div>
  );
};

export default RentItemInfo;

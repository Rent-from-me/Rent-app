import React from "react";
import { useParams } from "react-router-dom";
import "./RentItemInfo.css";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import RenterInfo from "../Renter/RenterInfo";


const RentItemInfo = (props) => {
  const params = useParams();
  const selectedItem = props.data.find(
    (selected) => selected.id === +params.id
  );
  const { id, title, img, reviewer, review } = selectedItem;

  return (
    <div className="item__info">
      <section className="item__info--header ">
        <h1 className="primary-heading  text-capitalize">
          {selectedItem.title}
        </h1>
        <div className="item__info-detail d-flex">
          <h4>
            ⭐ {review} ･ {reviewer} reviewer
          </h4>
          <h4 className="item_info-loction">Location of Host</h4>
        </div>
      </section>
      <Box sx={12} className=" mt-5 mx-auto d-flex" gap={.7}>
        <Grid xs={6.6} className="item__info-img--main grid">
          <img
            src={require(`../../../../asset/camer${id}.jpg`)}
            alt="img"
            className="item__info_img"
          />
        </Grid>
        <Grid xs={6} className="item-info-img--subs grid d-flex flex-wrap">
          <Grid xs={12} className="d-flex" gap={.4}>
            <Grid xs={6} className="item-info-img--sub ">
              <img
                src={require(`../../../../asset/camer4.jpg`)}
                alt="img"
                className="item__info_img"
              />
            </Grid>
            <Grid xs={6} className="item-info-img--sub">
              <img
                src={require(`../../../../asset/camer5.jpg`)}
                alt="img"
                className="item__info_img"
              />
            </Grid>
          </Grid>
          <Grid xs={12} className="d-flex" gap={.8}>
            <Grid xs={6} className="item-info-img--sub ">
              <img
                src={require(`../../../../asset/camer3.jpg`)}
                alt="img"
                className="item__info_img"
              />
            </Grid>
            <Grid xs={6} className="item-info-img--sub">
              <img
                src={require(`../../../../asset/camer2.jpg`)}
                alt="img"
                className="item__info_img"
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <section className="my-5">
        <RenterInfo data={selectedItem} />
      </section>
    </div>
  );
};

export default RentItemInfo;

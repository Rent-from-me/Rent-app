import React from "react";
import { useParams } from "react-router-dom";
import "./RentItemInfo.css";
import RenterInfo from "./RenterInfo";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";


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
      <Box sx={12} className=" mt-5 mx-auto d-flex" gap={1}>
        <Grid xs={6.6} className="item__info-img--main grid">
          <img
            src={require(`../../../asset/camer${id}.jpg`)}
            alt="img"
            className="item__info_img"
          />
        </Grid>
        <Grid xs={6} className="item-info-img--subs grid d-flex flex-wrap">
          <Grid xs={12} className="d-flex" gap={1}>
            <Grid xs={6} className="item-info-img--sub grid2">
              <img
                src={require(`../../../asset/camer4.jpg`)}
                alt="img"
                className="item__info_img"
              />
            </Grid>
            <Grid xs={6} className="item-info-img--sub grid2">
              <img
                src={require(`../../../asset/camer5.jpg`)}
                alt="img"
                className="item__info_img"
              />
            </Grid>
          </Grid>
          <Grid xs={12} className="d-flex" gap={1}>
            <Grid xs={6} className="item-info-img--sub grid2">
              <img
                src={require(`../../../asset/camer3.jpg`)}
                alt="img"
                className="item__info_img"
              />
            </Grid>
            <Grid xs={6} className="item-info-img--sub grid2">
              <img
                src={require(`../../../asset/camer2.jpg`)}
                alt="img"
                className="item__info_img"
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <section>
        <RenterInfo data ={selectedItem}/>
      </section>
    </div>
  );
};

export default RentItemInfo;
{
  /* 1.title and review 2.images 3.extra item 4.description 5.calender 6.full
      profile of preson such as image and same desc for person 7.review comment
      8.purchase more
      https://www.airbnb.com/rooms/43703769?category_tag=Tag%3A8226&adults=1&check_in=2022-10-08&check_out=2022-10-15&previous_page_section_name=1000&federated_search_id=5b7234a6-f5f1-46f6-bfac-9886fe8bf61b&guests=1&translate_ugc=true */
}

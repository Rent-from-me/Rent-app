import React, { Profiler } from "react";
import { useParams } from "react-router-dom";
import RenterInfo from "./RenterInfo";
import "./RentItemInfo.css"
const RentItemInfo = (props) => {
  const params = useParams();
  const selectedItem = props.data.find(
    (selected) => selected.id === +params.id
  );

  const { id, title, img,reviewer,review} = selectedItem;
  
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
      <section>
        <div className="item__info-imgs d-flex mt-5 align-items-center">
          <div className="item__info-img item__info-img--main">
            <img
              src={require(`../../../asset/camer${id}.jpg`)}
              alt="img"
              className="item__info_img"
            />
          </div>
          <div className="item-info-img--subs d-flex flex-wrap">
            <div className="item__info-img item-info-img--sub ms-3">
              {" "}
              <img
                src={require(`../../../asset/camer2.jpg`)}
                alt="img"
                className="item__info_img"
              />
            </div>
            <div className="item__info-img item-info-img--sub ms-3">
              {" "}
              <img
                src={require(`../../../asset/camer3.jpg`)}
                alt="img"
                className="item__info_img"
              />
            </div>
            <div className="item__info-img item-info-img--sub ms-3">
              {" "}
              <img
                src={require(`../../../asset/camer4.jpg`)}
                alt="img"
                className="item__info_img"
              />
            </div>
            <div className="item__info-img item-info-img--sub ms-3">
              {" "}
              <img
                src={require(`../../../asset/camer5.jpg`)}
                alt="img"
                className="item__info_img"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5 item__rent-data">
        <RenterInfo data={selectedItem} />
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

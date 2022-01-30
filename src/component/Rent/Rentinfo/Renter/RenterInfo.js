import React from "react";
import Comment from "../Reviewer/Reviewer";
import Avatar from "@mui/material/Avatar";
import "./RenterInfo.css";

const RenterInfo = (props) => {
  const { id, title, date, desc, comments,review,reviewer} = props.data;
  return (
    <>
      <section className="d-flex align-items-center mb-3 ">
        <div class="avatar-renter ">
          <Avatar
            alt="Remy Sharp"
            src={require(`../../../../asset/camer${id}.jpg`)}
            sx={{ width: 56, height: 56 }}
          />
        </div>
        <div>
          <h5 className="text-capitalize thrid-heading ms-3 fs-2">{title} </h5>
          <h5 className="text-capitalize ms-3">{date}</h5>
        </div>
      </section>
        <section className="">
          <p className="fs-4 mb-5">{desc}</p>
          <article>
            <h4 className="fs-2">
              ⭐ {review} ･ {reviewer} reviewer
            </h4>
            <div className="reviewer__con d-flex justify-content-between align-items-center flex-wrap my-5">
              {comments.map((comment, index) => (
                <Comment comment={comment} id={index} />
              ))}
            </div>
          </article>
        </section>
    </>
  );
};

export default RenterInfo;

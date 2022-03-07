import React, { useState } from "react";
import Comment from "../Reviewer/Reviewer";
import Avatar from "@mui/material/Avatar";
import "./RenterInfo.css";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const RenterInfo = (props) => {
  const { owner_id,create_at,description, } =
  props.selectedItem;

  const fristFourItem = 4;
  // const [comment, setComment] = useState(comments.slice(0, fristFourItem));

  return (
    <>
      <section className="d-flex align-items-center mb-3 ">
        <div class="avatar-renter ">
          <Avatar
            alt="Remy Sharp"
            src=""
            sx={{ width: 56, height: 56 }}
          />
        </div>
        <div>
          <h5 className="text-capitalize thrid-heading ms-3 fs-2">
           owner name
          </h5>
          <h5 className="text-capitalize ms-3">{create_at}</h5>
        </div>
      </section>
      <section className="">
        <p className="fs-4 mb-5">{description}</p>
        <article>
          <h4 className="fs-2">⭐ 2 ･ 200 reviewer</h4>
          <div className="reviewer__con d-flex justify-content-between align-items-center flex-wrap my-5">
            {/* {comments.length === 0 ? (
              <div class="no-comment">
                <WarningAmberIcon className="icon-warn me-2 fs-2" />
                <p className="fs-3">
                  waxa weeye waa alaab cusub oo hada lasoo galiyay wali ma helin
                  wax review ah
                </p>
              </div>
            ) : (
              comments.length > 0 &&
              comment.map((comment, index) => (
                <Comment {...comment} id={index} />
              ))
            )} */}
          </div>
        </article>
      </section>
    </>
  );
};

export default RenterInfo;

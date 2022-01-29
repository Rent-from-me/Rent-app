import React from "react";
import "./RenterInfo.css";

const RenterInfo = (props) => {
  const { id, title, date, desc, comments } = props.data;
  return (
    <>
      <section className="d-flex align-items-center mb-3 ">
        <div class="avatar-renter ">
          <img
            class="avatar__image"
            src={require(`../../../asset/camer${id + 1}.jpg`)}
          />
        </div>
        <div>
          <h5 className="text-capitalize thrid-heading ms-3">{title} </h5>
          <h5 className="text-capitalize ms-3">{date}</h5>
        </div>
      </section>
      <section className="item__rent-data ">
        <p className="fs-4">{desc}</p>
        <div className="comment d-flex flex-wrap ">
          {comments.map((comment) => (
            <div className="reviewer p-3" key={comment.name}>
              <section className="d-flex align-items-center mb-3 ">
                <div class="avatar-renter ">
                  <img
                    class="avatar__image"
                    src={require(`../../../asset/camer${id}.jpg`)}
                  />
                </div>

                <div>
                  <h5 className="text-capitalize thrid-heading ms-3">
                    {comment.name}
                  </h5>
                  <h5 className="text-capitalize ms-3">{comment.date}</h5>
                </div>
              </section>
              <h5 className="text-capitalize ms-3">{comment.comment}</h5>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default RenterInfo;

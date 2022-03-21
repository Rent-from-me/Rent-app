import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ownerLogin } from "../../../store/Actions/ownerAction/OwnerLogRegAction";
import AuthHost from "../../UserHostForm/AuthHost";
import HostLIst from "../Hostitem/HostLIst";
import HostHeader from "./HostHeader";
import "./HostHome.css";

const HostHome = (props) => {
  console.log(props);
  return (
    <div>
      {!props.isloginOwner ? (
        <AuthHost />
      ) : (
        <div className="host-home  ">
          <HostHeader />
          <section>
            <HostLIst />
          </section>
        </div>
      )}
    </div>
  );
};

export default HostHome;

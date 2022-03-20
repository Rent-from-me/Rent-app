import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthHost from "../../UserHostForm/AuthHost";
import HostLIst from "../Hostitem/HostLIst";
import HostHeader from "./HostHeader";
import "./HostHome.css";

const HostHome = () => {
  const ownerLogin = useSelector(
    (state) => state.OwnerLogRegReducer.ownerLogin
  );
  
  const [isloginOwner, setIsloginOwner] = useState(ownerLogin);
  
  useEffect(() => {
    isOwerTrue();
  });

  const isOwerTrue = () => {
    let store = JSON.parse(localStorage.getItem("owner"));
    console.log(store);
    if (store && store.login) {
      setIsloginOwner(store.login);
    }
  };
  
  console.log(isloginOwner);
  
  return (
    <div>
      {!isloginOwner ? (
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

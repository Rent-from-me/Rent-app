import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthHost from "../../UserHostForm/AuthHost";
import HostLIst from "../Hostitem/HostLIst";
import HostHeader from "./HostHeader";
import "./HostHome.css";

const HostHome = () => {
  const owerLogin = useSelector((state) => state.LoginRenterReducer.owerLogin);
  const [isloginOwner, setIsloginOwner] = useState(owerLogin);

  useEffect(() => {
    isOwerTrue();
  });

  const isOwerTrue = () => {
    let store = JSON.parse(localStorage.getItem("owner"));
    if (store && store.login) {
      setIsloginOwner(store.login);
    }
  };
  
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

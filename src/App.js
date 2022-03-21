import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./component/layout/Footer";
import Header from "./component/layout/Header";
import Home from "./pages/Home/Home";
import RentItemInfo from "./pages/Rentinfo/RentItem/RentItemInfo";
import RentList from "./pages/RentItem/RentList";
import NewItem from "./pages/Host/NewItemHost/NewItem";
import HostHome from "./pages/Host/HostHome/HostHome";
import Profile from "./pages/user/profile/Profile";
import UserRentItem from "./pages/user/UserRent/UserRentItem";
import Auth from "./pages/UserAuthForm/Auth";
import Loading from "./component/layout/Loading";
import AuthHost from "./pages/UserHostForm/AuthHost";
import { FechRentList } from "./store/Actions/rentListAction/RentListAction";
import { Rentals } from "./store/Actions/userAction/UserAction";

function App() {
  const loginstate = useSelector((state) => state.UserLogRegReducer.login);

  const [islogin, setIslogin] = useState(loginstate);

  useEffect(() => {
    console.log("run");
    isLoginTrue();
  });

  const isLoginTrue = () => {
    let store = JSON.parse(localStorage.getItem("login"));
    if (store && store.login) {
      setIslogin(store.login);
    }
  };
  
  const ownerLogin = useSelector(
    (state) => state.OwnerLogRegReducer.ownerLogin
  );
  
  const [isloginOwner, setIsloginOwner] = useState(ownerLogin);
  const [titleHostHeader, settTitleHostHeader] = useState("Become a host");
  
  useEffect(() => {
    isOwerTrue();
  });

  const isOwerTrue = () => {
    let store = JSON.parse(localStorage.getItem("owner"));
    if (store && store.login) {
      setIsloginOwner(store.login);
      settTitleHostHeader("Switch to hosting")
    }
  };
  
  console.log(isloginOwner);
  
  console.log(titleHostHeader);
  

  const Logout = () => {
    localStorage.removeItem("login");
    setIslogin(false);
  };
  

  
  return (
    <div className="App">
      {!islogin ? (
        <>
          <Routes>
            <Route path="*" element={<Auth />} />
          </Routes>
        </>
      ) : (
        <>
          <Header>
            <Header logout={Logout} titleHost={titleHostHeader} />
          </Header>

          <section className="main__section">
            <Routes>
              <Route path="/New" element={<NewItem />} />
              <Route path="/RentList" element={<RentList />} />
              <Route path="/Profile" element={<Profile logout={Logout} />} />
              <Route path="/ProfileRentItem" element={<UserRentItem />} />
              <Route path="*" element={<AuthHost />} />
              <Route path="/RentItemInfo/:id" element={<RentItemInfo />} />
              <Route
                path="/Host"
                element={<HostHome isloginOwner={isloginOwner} />}
              />
              {/* <Route path="/Chat" element={<Chat />} /> */}

              <Route path="/" element={<Home />} />
            </Routes>
          </section>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchItem } from "./store/Actions/RentItemAction";



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
import Auth from "./pages/Login/Auth";
import Loading from "./component/layout/Loading";


// import Auth from "./page/Users/user/Auth";

// import Loading from "./page/layout/Loading";



function App() {
  

  
  // useEffect(() => {
  //   fetchretal()
  // })
  
  // const fetchretal = () => {
  //   dispatch(uu__u());
  // }
  
  const loginstate = useSelector((state) => state.LoginRenterReducer.login);
  
  const [islogin, setIslogin] = useState(loginstate);
  
  useEffect(() => {
    isLoginTrue();
    
  })
  
  const isLoginTrue = () => {
    let store = JSON.parse(localStorage.getItem("login"))
    if(store && store.login) {
      setIslogin(store.login)
    }
  }
  
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
            <Header />
          </Header>

          <section className="main__section">
            <Routes>
              <Route path="/New" element={<NewItem />} />
              <Route path="/RentList" element={<RentList />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/ProfileRentItem" element={<UserRentItem />} />
              {/* <Route path="/ProfileChat" element={<ChatUser />} /> */}
              <Route path="/RentItemInfo/:id" element={<RentItemInfo />} />
              <Route path="/Host" element={<HostHome />} />
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

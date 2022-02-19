import React, { useState, useEffect,Suspense } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Loading from "./component/layout/Loading";

const Login = React.lazy(() => import("./component/Users/user/Login"));
const Register = React.lazy(() => import("./component/Users/user/Register"));
const Header = React.lazy(() => import("./component/layout/Header"));
const Footer = React.lazy(() => import("./component/layout/Footer"));
const Home = React.lazy(() => import("./component/Home/Home"));
const Profile = React.lazy(() =>
  import("./component/Users/user/profile/Profile")
);
const RentList = React.lazy(() => import("./component/Rent/RentItem/RentList"));
const RentItemInfo = React.lazy(() =>
  import("./component/Rent/Rentinfo/RentItem/RentItemInfo")
);
const HostHome = React.lazy(() =>
  import("./component/Users/Host/HostHome/HostHome")
);
const NewItem = React.lazy(() =>
  import("./component/Users/Host/NewItemHost/NewItem")
);
const Chat = React.lazy(() => import("./component/Users/Host/chat/Chat"));
const UserRentItem = React.lazy(() =>
  import("./component/Users/user/UserRent/UserRentItem")
);
const ChatUser = React.lazy(() =>
  import("./component/Users/user/ChatUser/ChatUser")
);

function App() {
  const init = useSelector((state) => state);
  const [allData, setAllData] = useState(init);

  //  useEffect(() => {
  //    getToLocalStorage();
  //  }, []);

  //  useEffect(() => {
  //   saveToLocalStorage()
  //  }, [allData]);

  // //save to local storage
  // const saveToLocalStorage = () => {
  //   localStorage.setItem("Data", JSON.stringify(allData));
  // }

  // //Get to local storage
  // const getToLocalStorage = () => {
  //   if(localStorage.getItem("Data") === null) localStorage.setItem("Data", JSON.stringify({}))
  //   else {
  //     let localData = JSON.parse(localStorage.getItem("Data"))
  //     // {localData && addRentItem ? }
  //     if(localData  ) setAllData(localData);
  //   }
  // }

  return (
    <div className="App">
      {!Register ? (
        <Login />
      ) : (
        <>
          <Header>
            <Header />
          </Header>

          <section className="main__section">
              <Suspense fallback={<Loading/>}>
              <Routes>
                <Route path="/New" element={<NewItem />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/RentList" element={<RentList />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/ProfileRentItem" element={<UserRentItem />} />
                <Route path="/ProfileChat" element={<ChatUser />} />
                <Route path="/RentItemInfo/:id" element={<RentItemInfo />} />
                <Route path="/Host" element={<HostHome />} />
                <Route path="/Chat" element={<Chat />} />

                <Route path="/" element={<Home />} />
              </Routes>
            </Suspense>
          </section>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Footer from './component/layout/Footer';
import Header from './component/layout/Header';
import RentItemInfo from './component/Rent/Rentinfo/RentItem/RentItemInfo';
import RentItem from './component/Rent/RentItem/RentItem';
import RentList from './component/Rent/RentItem/RentList';
import Chat from './component/Users/Host/chat/Chat';
import HostHome from './component/Users/Host/HostHome/HostHome';
import NewItem from './component/Users/Host/NewItemHost/NewItem';
import Login from './component/Users/user/Login';
import Register from './component/Users/user/Register';



function App() {
   const init = useSelector((state) => state);
   const [allData,setAllData] = useState(init)
  //save to local storage 
  const saveToLocalStorage = () => {
    localStorage.setItem("Data", JSON.stringify(allData));
  }
  
  //Get to local storage
  const getToLocalStorage = () => {
    if(localStorage.getItem("Data") === null) localStorage.setItem("Data", JSON.stringify([]))
    else {
      let localData = JSON.parse(localStorage.getItem("Data"))
      // {localData && addRentItem ? }
      if(localData  ) setAllData(localData);
    }
  }
  console.log(allData);
 
  return (
    <div className="App">
      {!Register ? (
        <Login  />
      ) : (
        <>
          <Header>
            <Header />
          </Header>
          <section>
            <Routes>
              <Route
                path="/New"
                element={<NewItem/>}
              />
              <Route path="/Register" element={<Register />} />
              <Route path="/RentList" element={<RentList  />} />
              <Route
                path="/RentItemInfo/:id"
                element={<RentItemInfo />}
              />
              <Route
                path="/Host"
                element={<HostHome  />}
              />
              <Route path="/Chat" element={<Chat />} />

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

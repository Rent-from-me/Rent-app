import React, { useState } from 'react';
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



import {init} from "./DummyDate"

function App() {
  const [d, setD] = useState(init.rentItem);
  const [h, setH] = useState(init.host.rentitems);
  
  // ADD NEW ITEM 
  const addRentItem = (addNew) => {
    const add = [...d, {...addNew}]
    const addHostitemList = [...h, {...addNew}]
    setD(add)
    setH(addHostitemList)
  }
  console.log(h);
  return (
    <div className="App">
      <Header>
        <Header />
      </Header>
      <section>
        <Routes>
          <Route path="/New" element={<NewItem add={addRentItem} />} />
          <Route path="/RentList" element={<RentList rent={d} />} />
          <Route
            path="/RentItemInfo/:id"
            element={<RentItemInfo info = {d} />}
          />
          <Route path="/Host" element={<HostHome hostList = {h} />} />
          <Route path="/Chat" element={<Chat />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </section>
      <Footer />
    </div>
  );
}

export default App;

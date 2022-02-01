import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Footer from './component/layout/Footer';
import Header from './component/layout/Header';
import RentItemInfo from './component/Rent/Rentinfo/RentItem/RentItemInfo';
import RentList from './component/Rent/RentItem/RentList';
import Chat from './component/Users/chat/Chat';
import HostHome from './component/Users/HostHome/HostHome';
import NewItem from './component/Users/NewItemHost/NewItem';


import {init} from "./DummyDate"



function App() {
  
  return (
    <div className="App">
      <Header>
        <Header />
      </Header>
      <section>
        <Routes>
          <Route path="/RentList" element={<RentList {...init} />} />
          <Route
            path="/RentItemInfo/:id"
            element={<RentItemInfo {...init} />}
          />
          <Route path="/Host" element={<HostHome data={init} />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/New" element={<NewItem />} add wone />
          <Route path="/" element={<Home />} />
        </Routes>
      </section>
      <Footer />
    </div>
  );
}

export default App;

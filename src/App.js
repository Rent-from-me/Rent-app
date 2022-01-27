import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Header from './component/layout/Header';
import RentItemInfo from './component/Rent/Rentinfo/RentItemInfo';
import RentList from './component/Rent/RentItem/RentList';
import Auth from './component/User/Auth';
import {init} from "./DummyDate"

function App() {
  
  return (
    <div className="App">
      <Header>
        <Header />
      </Header>
      <section>
        <Routes>
          <Route path="/RentList" element={<RentList data={init} />} />
          <Route
            path="/RentItemInfo/:id"
            element={<RentItemInfo data={init} />}
          />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;

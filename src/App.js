import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Header from './component/layout/Header';
import RentItemInfo from './component/Rent/RentItemInfo';
import RentList from './component/Rent/RentList';
import Auth from './component/User/Auth';


function App() {
  return (
    <div className="App">
      <Header>
        <Header />
      </Header>
      <section>
        <Routes>
          <Route path="/RentList" element={<RentList />} />
          <Route path="/RentItemInfo/:id" element={<RentItemInfo />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;

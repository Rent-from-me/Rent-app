import React from 'react';
import Banner from './Banner';
import RentNow from "./RentNow"
import Discover from "./Discover"
import BecomeHost from "./BecomeHost"

const Home = () => {
  return (
    <div>
      <Banner />
      <Discover />
      <RentNow />
      <BecomeHost />
    </div>
  );
};

export default Home;

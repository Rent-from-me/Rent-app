import React from 'react';
import HostLIst from '../Hostitem/HostLIst';
import HostHeader from './HostHeader';
import "./HostHome.css"


const HostHome = () => {
  
  return (
    <div className="host-home  ">
      <HostHeader />
      <section>
        <HostLIst />
      </section>
    </div>
  );
};

export default HostHome;

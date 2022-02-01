import React from 'react';
import HostLIst from '../Hostitem/HostLIst';
import HostHeader from './HostHeader';
import "./HostHome.css"


const HostHome = ({host}) => {
  return (
    <div className="host-home  ">
      <HostHeader />
      <section>
        <HostLIst {...host} />
      </section>
    </div>
  );
};

export default HostHome;

import React from 'react';
import HostLIst from '../Hostitem/HostLIst';
import HostHeader from './HostHeader';
import "./HostHome.css"


const HostHome = (props) => {
  
  return (
    <div className="host-home  ">
      <HostHeader />
      <section>
        <HostLIst hostItem={props.hostList} />
      </section>
    </div>
  );
};

export default HostHome;

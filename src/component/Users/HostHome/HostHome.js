import React from 'react';
import HostLIst from '../Hostitem/HostLIst';
import HostHeader from './HostHeader';
import "./HostHome.css"


const HostHome = (props) => {
  console.log(props.data);
  return (
    <div className="host-home  ">
      <HostHeader />
      <section>
        <HostLIst data={props.data} />
      </section>
    </div>
  );
};

export default HostHome;

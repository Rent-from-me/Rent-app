import React from 'react';
import HostItem from './HostItem';

const HostLIst = (props) => {
  
  return (
    <div>
      {props.hostItem.map((item, index) => (
        <HostItem item = {item} key={index} />
      ))}
    </div>
  );
};

export default HostLIst;

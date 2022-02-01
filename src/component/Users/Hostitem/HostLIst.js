import React from 'react';
import HostItem from './HostItem';

const HostLIst = (props) => {

  return (
    <div>
      {props.data.map((item, index) => (
        <HostItem {...item} key={index} />
      ))}
    </div>
  );
};

export default HostLIst;

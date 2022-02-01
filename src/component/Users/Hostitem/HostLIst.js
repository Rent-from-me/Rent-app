import React from 'react';
import HostItem from './HostItem';

const HostLIst = ({ rentitems }) => {
  console.log(rentitems);
  return (
    <div>
      {rentitems.map((item, index) => (
        <HostItem {...item} key={index} />
      ))}
    </div>
  );
};

export default HostLIst;

import { convertLength } from '@mui/material/styles/cssUtils';
import React from 'react';
import { useSelector } from 'react-redux';
import HostItem from './HostItem';

const HostLIst = () => {
  
  const hostItems = []
  console.log(hostItems);
  return (
    <div>
      {hostItems.map((item) => (
        <HostItem
          {...item}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default HostLIst;

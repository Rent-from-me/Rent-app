import axios from 'axios';
import React from 'react'

const axiosAuth = () => {
  let store = JSON.parse(localStorage.getItem("login"));
  let token = store.token;
  console.log(token);
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  });
}

export default axiosAuth
 

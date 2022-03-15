import axios from 'axios';

export const BaseUrl = "https://rentfromme.herokuapp.com/api";

const axiosAuth = () => {
  let store = JSON.parse(localStorage.getItem("login"));
  let token = store.token;
  return axios.create({
    headers: {
      "Content-Type": "application/json",
       Authorization: `${token}`,
    },
  });
}

export default axiosAuth
 

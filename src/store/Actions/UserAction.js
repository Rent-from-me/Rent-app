import axios from "axios";
import axiosAuth, { BaseUrl } from "../../api/axiosAuth";


export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
export const USER_REGISTER = "USER_REGISTER";
export const GET_USERS = "GET_USERS";
export const FETCH_RENTITEM_START = "FETCH_RENTITEM_START";
export const FETCH_RENTITEM_SUCCESS = "FETCH_RENTITEM_SUCCESS";
export const FETCH_USERRENTITEM_SUCCESS = "FETCH_USERRENTITEM_SUCCESS";
export const FETCH_RENTITEM_FAIL = "FETCH_MISSION_FAIL";



export const RegisterUser = (Register) => (dispatch) => {
  axios
    .post(`${BaseUrl}/renters/register`, { ...Register })
    .then((res) => {
      dispatch({ type: USER_REGISTER, payload: res.data });
    })
    .catch((error) => error.message);
};


export const LoginUser = (userLogin) => (dispatch) => {
  axios
    .post(`${BaseUrl}/renters/login`, userLogin)
    .then((res) => {
      localStorage.setItem(
        "login",
        JSON.stringify({
          userId: res.data.userId,
          msg: res.data.message,
          login: true,
          token: res.data.token,
        })
      );
      dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
    })
    .catch((error) =>
      dispatch({ type: USER_LOGIN_FAIL, payload: error.message })
    );
};



export const rentItem = (item) => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("login"));
  axiosAuth()
    .post(
      `${BaseUrl}/rentals/rentItem`,
      JSON.stringify(item),
      { headers: { token: token.token } }
    )
    .then((res) => {
      console.log(res);
      // dispatch({ type: FETCH_RENTITEM_SUCCESS, payload: res.data });
    })
    .catch((error) =>
      dispatch({ type: FETCH_RENTITEM_FAIL, payload: error.message })
    );
};

export const userRentItem = () => (dispatch) => {
  // dispatch({ type: FETCH_RENTITEM_START });
  const token = JSON.parse(localStorage.getItem("login"));

  axiosAuth()
    .get(`${BaseUrl}/rentals/rentals`, {
      headers: { token: token.token },
    })
    .then((res) => {
      console.log(res);
      dispatch({ type: FETCH_USERRENTITEM_SUCCESS, payload: res.data });
    })
    .catch((error) =>
      dispatch({ type: FETCH_RENTITEM_FAIL, payload: error.message })
    );
};




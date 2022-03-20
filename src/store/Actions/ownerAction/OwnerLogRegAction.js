import axios from "axios";
import { BaseUrl } from "../../../api/axiosAuth";

//ACTION CREATORS
export const OWNER_REGISTER_SUCCESS = "OWNER_REGISTER";
export const OWNER_REGISTER_FAIL = "OWNER_REGISTER";
export const OWNER_LOGIN_SUCCESS = "OWNER_LOGIN_SUCCESS";
export const OWNER_LOGIN_FAIL = "OWNER_LOGIN_FAIL";


//ACTION TYPE

//1.REGISTER OWER
export const ownerRegister = (Register) => (dispatch) => {
  axios
    .post(`${BaseUrl}/owners/register`, { ...Register })
    .then((res) => {
      console.log(res);
      dispatch({ type: OWNER_REGISTER_SUCCESS, payload: res.data });
    })
    .catch((error) =>
      dispatch({ type: OWNER_REGISTER_FAIL, payload: error.message })
    );
};

//2.REGISTER LOGIN
export const ownerLogin = (owerLogin) => (dispatch) => {
  axios
    .post(`${BaseUrl}/owners/login`, owerLogin)
    .then((res) => {
      localStorage.setItem(
        "owner",
        JSON.stringify({
          ownerId: res.data.userId,
          msg: res.data.message,
          login: true,
          token: res.data.token,
        })
      );
      dispatch({ type: OWNER_LOGIN_SUCCESS, payload: res.data });
    })
    .catch(
      (error) =>
      dispatch({ type: OWNER_REGISTER_FAIL, payload: error.message })
    );
};



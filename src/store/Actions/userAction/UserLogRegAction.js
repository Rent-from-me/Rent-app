import axios from "axios";
import { BaseUrl } from "../../../api/axiosAuth";

//ACTION CREATORS
export const USER_REGISTER_SUCCESS = "USER_REGISTER";
export const USER_REGISTER_FAIL = "USER_REGISTER";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";


//ACTION TYPE
export const userRegister = (Register) => (dispatch) => {
  axios
    .post(`${BaseUrl}/renters/register`, { ...Register })
    .then((res) => {
      console.log(res.data);
      // localStorage.setItem(
      //   "login",
      //   JSON.stringify({
      //     userId: res.data.userId,
      //     msg: res.data.message,
      //     login: true,
      //     token: res.data.token,
      //   })
      // );
      dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data });
    })
    .catch((error) => {
    
          dispatch({ type: USER_REGISTER_FAIL });
    }
    );
};

export const userLogin = (userLogin) => (dispatch) => {
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
    console.log(res);
      dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: USER_LOGIN_FAIL })
    }
    );
};



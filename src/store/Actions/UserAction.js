import axios from "axios";

export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
export const USER_REGISTER = "USER_REGISTER";
export const GET_USERS = "GET_USERS";


const endPoint = "https://rentfromme.herokuapp.com/api";

export const RegisterUser = (Register) => (dispatch) => {
  axios
    .post(`${endPoint}/renters/register`, { ...Register })
    .then((res) => {
      dispatch({ type: USER_REGISTER, payload: res.data });
    })
    .catch((error) => error.message);
};


export const LoginUser = (userLogin) => (dispatch) => {
  axios
    .post(`${endPoint}/renters/login`, userLogin)
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






import axios from "axios";
import axiosAuth, { BaseUrl } from "../../api/axiosAuth";

export const HOST_REGISTER_SUCCESS = "HOST_REGISTER_SUCCESS";
export const HOST_REGISTER_FAIL = "HOST_REGISTER_FAIL";
export const HOST_LOGIN_SUCCESS = "HOST_LOGIN_SUCCESS";
export const HOST_LOGIN_FAIL = "HOST_LOGIN_FAIL";
export const HOST_CREATEITEM_SUCCESS = "FETCH_HOST_FAIL_CREATEITEM";
export const HOST_CREATEITEM_FAIL = "FETCH_HOST_FAIL_CREATEITEM";

//    "email": "jessica@gmail.com",
//    "password": "$2a$08$VgTy64haCr29gafXgzNjGOn8uLIs4c4YKY6LTo0fsum2cYucuEBaa",

export const RegisterHoster = (Register) => (dispatch) => {
  axios
    .post(`${BaseUrl}/owners/register`, { ...Register })
    .then((res) => {
      dispatch({ type: HOST_REGISTER_SUCCESS, payload: res.data });
    })
    .catch((error) =>
      dispatch({ type: HOST_REGISTER_FAIL, payload: error.message })
    );
};

export const LoginHost = (owerLogin) => (dispatch) => {
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
      dispatch({ type: HOST_LOGIN_SUCCESS, payload: res.data });
    })
    .catch((error) =>
      dispatch({ type: HOST_REGISTER_FAIL, payload: error.message })
    );
};

export const GetHost = (id) => (dispatch) => {
  // dispatch({ type: FETCH_RENTITEM_START });
  const token = JSON.parse(localStorage.getItem("owner"));
  axiosAuth()
    .get(`${BaseUrl}/owner/${id}`, {
      headers: { token: token.token },
    })
    .then((res) => {
      console.log(res);
      // dispatch({ type: CREACT_ITEM, payload: res.data });
    })
    .catch((error) =>
      dispatch({ type: HOST_CREATEITEM_SUCCESS, payload: error.message })
    );
};
export const HostITem = (id) => (dispatch) => {
  // dispatch({ type: FETCH_RENTITEM_START });
  const token = JSON.parse(localStorage.getItem("owner"));
  axiosAuth()
    .get(`${BaseUrl}/items/owner/${id}`, {
      headers: { token: token.token },
    })
    .then((res) => {
      console.log(res);
      // dispatch({ type: CREACT_ITEM, payload: res.data });
    })
    .catch((error) =>
      dispatch({ type: HOST_CREATEITEM_SUCCESS, payload: error.message })
    );
};

export const creatItem = (item) => (dispatch) => {
  // dispatch({ type: FETCH_RENTITEM_START });
  const token = JSON.parse(localStorage.getItem("owner"));
  console.log(item);
  axiosAuth()
    .post(`${BaseUrl}/items/create`, JSON.stringify(item), {
      headers: { token: token.token },
    })
    .then((res) => {
      console.log(res);
      // dispatch({ type: CREACT_ITEM, payload: res.data });
    })
    .catch((error) =>
      dispatch({ type: HOST_CREATEITEM_SUCCESS, payload: error.message })
    );
};
export const deleteItem = (id) => (dispatch) => {
  // dispatch({ type: FETCH_RENTITEM_START });
  const token = JSON.parse(localStorage.getItem("owner"));

  axiosAuth()
    .delete(`${BaseUrl}/rentals/${id}`, {
      headers: { token: token.token },
    })
    .then((res) => {
      console.log(res);
      // dispatch({ type: CREACT_ITEM, payload: res.data });
    })
    .catch((error) =>
      dispatch({ type: HOST_CREATEITEM_SUCCESS, payload: error.message })
    );
};
// export const updateItem = (id) => (dispatch) => {
//   // dispatch({ type: FETCH_RENTITEM_START });
//   const token = JSON.parse(localStorage.getItem("owner"));

//   axiosAuth()
//     .put(`${BaseUrl}/rentals/${id}`, {
//       headers: { token: token.token },
//     })
//     .then((res) => {
//       console.log(res);
//       // dispatch({ type: CREACT_ITEM, payload: res.data });
//     })
//     .catch((error) =>
//       dispatch({ type: HOST_CREATEITEM_SUCCESS, payload: error.message })
//     );
// };

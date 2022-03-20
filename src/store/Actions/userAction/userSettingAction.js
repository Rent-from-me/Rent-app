import axiosAuth, { BaseUrl } from "../../../api/axiosAuth";

export const USER_UPDATE_SUCCESS = "USER_UPDATE_SUCCESS";
export const USER_UPDATE_FAIL = "USER_UPDATE_FAIL";
export const USER_DELETE_SUCCESS = "USER_DELETE_SUCCESS";
export const USER_DELETE_FAIL = "USER_DELETE_FAIL";
export const USER_GET_SUCCESS = "USER_GET_SUCCESS";
export const USER_GET_FAIL = "USER_GET_FAIL";

const token = JSON.parse(localStorage.getItem("login"));

//1.GETUSER
export const getUser = (id) => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("login"));
  axiosAuth()
    .get(`${BaseUrl}/renters/${id}`, 
    { headers: { token: token.token } })
    .then((res) => {
      dispatch({ type: USER_GET_SUCCESS, payload: res.data });
    })
    .catch((error) =>
      dispatch({ type: USER_GET_FAIL, payload: error.message })
    );
};

//1.UPADATE USER
export const updateUser = (id, data) => (dispatch) => {
  console.log(data);
  axiosAuth()
    .put(`${BaseUrl}/renters/${id}`, JSON.stringify(data), {
      headers: { token: token.token },
    })
    .then((res) => {
      console.log(res);
      dispatch({ type: USER_UPDATE_SUCCESS, payload: res.data });
    })
    .catch((error) =>
      dispatch({ type: USER_UPDATE_FAIL, payload: error.message })
    );
};

//2.DELETE USER
export const deleteUser = (id) => (dispatch) => {
  axiosAuth()
    .delete(`${BaseUrl}/renters/${id}`, { headers: { token: token.token } })
    .then((res) => {
      dispatch({ type: USER_DELETE_SUCCESS, payload: res.data });
    })
    .catch((error) =>
      dispatch({ type: USER_DELETE_FAIL, payload: error.message })
    );
};

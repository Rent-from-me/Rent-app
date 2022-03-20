//3.GETOWNER INFORMATION
import axiosAuth, { BaseUrl } from "../../../api/axiosAuth";

//ACTION CREATOR
export const OWNER_GET_SUCCESS = "OWNER_GET_SUCCESS";
export const OWNER_GET_FAIL = "OWNER_GET_FAIL";
export const FETCH_USER_START = "FETCH_USER_START";


 const token = JSON.parse(localStorage.getItem("owner"));
 
//GET OWNER 
export const getOwner = (id) => (dispatch) => {
  dispatch({ type: FETCH_USER_START });
  axiosAuth()
    .get(`${BaseUrl}/owner/${id}`, {
      headers: { token: token.token },
    })
    .then((res) => {
      console.log(res);
      dispatch({ type: OWNER_GET_SUCCESS, payload: res.data });
    })
    .catch((error) =>
      dispatch({ type: OWNER_GET_FAIL, payload: error.message })
    );
};


//UPDATE OWNER 
export const updateOwner = (id,data) => (dispatch) => {
  dispatch({ type: FETCH_USER_START });

  axiosAuth()
    .put(`${BaseUrl}/owner/${id}`, JSON.stringify(data), {
      headers: { token: token.token },
    })
    .then((res) => {
      dispatch({ type: OWNER_GET_SUCCESS, payload: res.data });
    })
    .catch((error) =>
      dispatch({ type: OWNER_GET_FAIL, payload: error.message })
    );
};


//DELETE OWNER 
export const deleteOwner = (id) => (dispatch) => {
  dispatch({ type: FETCH_USER_START });
  axiosAuth()
    .delete(`${BaseUrl}/owner/${id}`, {
      headers: { token: token.token },
    })
    .then((res) => {
      dispatch({ type: OWNER_GET_SUCCESS, payload: res.data });
    })
    .catch((error) =>
      dispatch({ type: OWNER_GET_FAIL, payload: error.message })
    );
};

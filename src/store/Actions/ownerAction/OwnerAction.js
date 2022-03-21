import axios from "axios";
import axiosAuth, { BaseUrl } from "../../../api/axiosAuth";

export const OWNER_CREATEITEM_SUCCESS = "OWNER_CREATEITEM_SUCCESS";
export const OWNER_CREATEITEM_FAIL = "OWNER_CREATEITEM_FAIL";
export const OWNER_FETCHITEM_SUCCESS = "OWNER_FETCHITEM_SUCCESS";
export const OWNER_FETCHITEM_FAIL = "OWNER_FETCHITEM_FAIL";
export const OWNER_UPATEITEM_SUCCESS = "OWNER_UPATEITEM_SUCCESS";
export const OWNER_UPATEITEM_FAIL = "OWNER_UPATEITEM_FAIL";
export const OWNER_DELETEITEM_SUCCESS = "OWNER_DELETEITEM_SUCCESS";
export const OWNER_DELETEITEM_FAIL = "OWNER_DELETEITEM_FAIL";
export const OWNER_FETCH_START = "OWNER_FETCH_START";

const token = JSON.parse(localStorage.getItem("owner"));

//OWNER CREATE NEW ITEM
export const creatNewItem = (item) => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("owner"));
  axiosAuth()
    .post(`${BaseUrl}/items/create`, JSON.stringify(item), {
      headers: { token: token.token },
    })
    .then((res) => {
      dispatch({ type: OWNER_CREATEITEM_SUCCESS, payload: res.data });
    })
    .catch((error) =>
      dispatch({ type: OWNER_CREATEITEM_FAIL, payload: error.message })
    );
};


//OWNER FFECHT ITEMS CREATE
export const ownerItemFetch = () => (dispatch) => {
  // dispatch({ type: OWNER_FETCH_START });
  const token = JSON.parse(localStorage.getItem("owner"));
  axiosAuth()
    .get(`${BaseUrl}/items`, 
    {headers: { token: token.token }}
    )
    .then((res) => {
      dispatch({ type: OWNER_FETCHITEM_SUCCESS, payload: res.data });
    })
    .catch((error) =>
      dispatch({ type: OWNER_FETCHITEM_FAIL, payload: error.message })
    );
};

//OWNER UPDATE ITEM
export const updateItem = (id,data) => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("owner"));
  console.log(data);
  axiosAuth()
    .put(`${BaseUrl}/items/${id}`,JSON.stringify(data) ,{
      headers: { token: token.token },
    })
    .then((res) => {
      dispatch({ type: OWNER_UPATEITEM_SUCCESS, payload: res.data });
    })
    .catch((error) =>
      dispatch({ type: OWNER_UPATEITEM_SUCCESS, payload: error.message })
    );
};

//OWNER DELETE ITIME 
export const deleteItem = (id) => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("owner"));
  axiosAuth()
    .delete(`${BaseUrl}/item/${id}`, {
      headers: { token: token.token },
    })
    .then((res) => {
      console.log(res);
      dispatch({ type: OWNER_DELETEITEM_SUCCESS, payload: res.data });
    })
    .catch((error) =>
      dispatch({ type: OWNER_DELETEITEM_FAIL, payload: error.message })
    );
};

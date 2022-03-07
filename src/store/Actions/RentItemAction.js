import axios from "axios";
import axiosAuth from "../../api/axiosAuth";
export const FETCH_RENTITEM_START = "FETCH_RENTITEM_START";
export const FETCH_RENTITEM_SUCCESS = "FETCH_RENTITEM_SUCCESS";
export const FETCH_RENTITEM_FAIL = "FETCH_MISSION_FAIL";


export const fetchItem = () => (dispatch) => {
  dispatch({ type: FETCH_RENTITEM_START });

  axios
    .get("https://rentfromme.herokuapp.com/api/items")
    .then((res) => {
      dispatch({ type: FETCH_RENTITEM_SUCCESS, payload: res.data });
    })
    .catch((error) =>
      dispatch({ type: FETCH_RENTITEM_FAIL, payload: error.message })
    );
};





export const rentItem = (item) => (dispatch) => {
  dispatch({ type: FETCH_RENTITEM_START });

  axiosAuth()
    .post(
      "https://rentfromme.herokuapp.com/api/rentals/rentItem",
      JSON.stringify(item)
    )
    .then((res) => {
      console.log(res);
      // dispatch({ type: FETCH_RENTITEM_SUCCESS, payload: res.data });
    })
    .catch((error) =>
      dispatch({ type: FETCH_RENTITEM_FAIL, payload: error.message })
    );
};


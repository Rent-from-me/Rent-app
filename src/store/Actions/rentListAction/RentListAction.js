import axios from "axios";
import { BaseUrl } from "../../../api/axiosAuth";


export const FETCH_RENTLIST_START = "FETCH_RENTLIST_START";
export const FETCH_RENTLIST_SUCCESS = "FETCH_RENTLIST_SUCCESS";
export const FETCH_RENTLIST_FAIL = "FETCH_MISSION_FAIL";

export const FechRentList = () => (dispatch) => {
  dispatch({ type: FETCH_RENTLIST_START });
  axios
    .get(`${BaseUrl}/items`)
    .then((res) => {
      dispatch({ type: FETCH_RENTLIST_SUCCESS, payload: res.data });
    })
    .catch((error) =>
      dispatch({ type: FETCH_RENTLIST_FAIL, payload: error.message })
    );
};


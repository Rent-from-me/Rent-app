//Import axios
import { Axios } from "axios";

//Action Type
export const RENTITEMS_START = "RENTITEMS_START";
export const RENTITEMS_SUCCESS = "RENTITEMS_SUCCESS";
export const RENTITEMS_FAIL = "RENTITEMS_FAIL";


//Action Creator

export const fetchMissions = () => (dispatch) => {
  // Dispatch Start
  dispatch({ type: FETCH_MISSION_START });

  // API CALL with axios
  axios
    .get("https://api.spacexdata.com/v3/missions")
    .then((res) => {
      // Dispatch Succes
      dispatch({ type: FETCH_MISSION_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_MISSION_FAIL, payload: err.message });
    });
};
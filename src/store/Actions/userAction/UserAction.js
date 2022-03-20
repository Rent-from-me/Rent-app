import axiosAuth, { BaseUrl } from "../../../api/axiosAuth";

//ACTION CREATOR
export const USER_RENTNEWITEM_SUCCESS = "USER_RENTNEWITEM_SUCCESS ";
export const USER_RENTNEWITEM_FAIL = "USER_RENTNEWITEM_FAIL";
export const USER_GETRENTAL_FETCH = "USER_GETRENTAL_FETCH ";
export const USER_GETRENTAL_SUCCESS = "USER_GETRENTAL_SUCCESS ";
export const USER_GETRENTAL_FAIL = "USER_GETRENTAL_FAIL";
export const USER_DELETERENTAL_SUCCESS = "USER_DELETERENTAL_SUCCESS ";
export const USER_DELETERENTAL_FAIL = "USER_DELETERENTAL_FAIL";
export const USER_UPDATERENTAL_SUCCESS = "USER_UPDATERENTAL_SUCCESS ";
export const USER_UPDATERENTAL_FAIL = "USER_UPDATERENTAL_FAIL";
export const USER_RATING_SUCCESS = "USER_RATING_SUCCESS ";
export const USER_RATING_FAIL = "USER_RATING_FAIL";


const token = JSON.parse(localStorage.getItem("login"));

//1.RENTNEWITEM USER
export const rentNewItem = (item) => (dispatch) => {
  axiosAuth()
    .post(`${BaseUrl}/rentals/rentItem`, JSON.stringify(item), {
      headers: { token: token.token },
    })
    .then((res) => {
      console.log(res);
      dispatch({ type: USER_RENTNEWITEM_SUCCESS, payload: res.data });
    })
    .catch((error) =>
      dispatch({ type: USER_RENTNEWITEM_FAIL, payload: error.message })
    );
};

//2.GET RENTALS LIST USERs
export const Rentals = () => (dispatch) => {
  dispatch({ type: USER_GETRENTAL_FETCH });
  axiosAuth()
    .get(`${BaseUrl}/rentals`, {
      headers: { token: token.token },
    })
    .then((res) => {
      console.log(res.data)
      dispatch({ type: USER_GETRENTAL_SUCCESS, payload: res.data });
    })
    .catch((error) =>
      dispatch({ type: USER_GETRENTAL_FAIL, payload: error.message })
    );
};

//2.UPDATE 
export const updateRental = (id) => (dispatch) => {
  axiosAuth()
    .delete(`${BaseUrl}/rentals/${id}`, {
      headers: { token: token.token },
    })
    .then((res) => {
      console.log(res);
      dispatch({ type: USER_UPDATERENTAL_SUCCESS, payload: res.data });
    })
    .catch((error) =>
      dispatch({ type: USER_UPDATERENTAL_FAIL, payload: error.message })
    );
};

//3.DELETE RENTAL
export const addRating = (id,data) => (dispatch) => {
  axiosAuth()
    .put(`${BaseUrl}/items/${id}`,JSON.stringify(data), {
      headers: { token: token.token },
    })
    .then((res) => {
      console.log(res);
      dispatch({ type: USER_RATING_SUCCESS, payload: res.data });
    })
    .catch((error) =>
      dispatch({ type: USER_RATING_FAIL, payload: error.message })
    );
};


//4.DELETE RENTAL
export const deleteRental = (id) => (dispatch) => {
  axiosAuth()
    .delete(`${BaseUrl}/rentals/${id}`, {
      headers: { token: token.token },
    })
    .then((res) => {
      console.log(res);
      dispatch({ type: USER_DELETERENTAL_SUCCESS, payload: res.data });
    })
    .catch((error) =>
      dispatch({ type: USER_DELETERENTAL_FAIL, payload: error.message })
    );
};



import {
  USER_DELETERENTAL_FAIL,
  USER_DELETERENTAL_SUCCESS,
  USER_GETRENTAL_FAIL,
  USER_GETRENTAL_SUCCESS,
  USER_RATING_SUCCESS,
  USER_RENTNEWITEM_FAIL,
  USER_RENTNEWITEM_SUCCESS,
  USER_UPDATERENTAL_FAIL,
  USER_UPDATERENTAL_SUCCESS,
} from "../../Actions/userAction/UserAction";

const init = {
  userRental: [],
  userRentItem: false,
  rentalDelete: false,
  erro: "",
  isLoadin: false,
};

export const UserReducer = (state = init, action) => {
  switch (action.type) {
    case USER_RENTNEWITEM_SUCCESS:
      return {
        ...state,
      };
    case USER_RENTNEWITEM_FAIL:
      return {};
    case USER_GETRENTAL_SUCCESS:
      return {
        ...state,
        userRental: [...action.payload],
        erro: "",
        userRentItem: true,
        isLoadin: false,
      };
    case USER_GETRENTAL_FAIL:
      return {};
    case USER_DELETERENTAL_SUCCESS:
      return {
        ...state,
        rentalDelete: true,
      };  
    case USER_DELETERENTAL_FAIL:
      return {};
    case USER_UPDATERENTAL_SUCCESS:
      return {};
    case USER_UPDATERENTAL_FAIL:
      return {};
    default:
      return state;
  }
};

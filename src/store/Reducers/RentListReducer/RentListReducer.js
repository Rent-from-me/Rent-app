import { act } from "@testing-library/react";
import {
  FETCH_RENTLIST_START,
  FETCH_RENTLIST_SUCCESS,
  FETCH_RENTLIST_FAIL,
} from "../../Actions/rentListAction/RentListAction";
import { USER_RATING_SUCCESS } from "../../Actions/userAction/UserAction";

const InitialState = {
  rentitem: [],
  isLoading: false,
  error: "",
  userRent: [],
};

export const FetchRentListReducer = (state = InitialState, action) => {
  switch (action.type) {
    case FETCH_RENTLIST_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case FETCH_RENTLIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        rentitem: action.payload,
        error: "",
      };

    case FETCH_RENTLIST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case USER_RATING_SUCCESS:
      return {
        ...state,
        rentitem: [
          ...state.rentitem,
          state.rentitem.filter((i) =>
            i.id === action.payload.id
              ? {
                  ...i,
                  comment: [...state.rentitem.comment, { ...action.payload.data }],
                  review: act.payload.data.star,
                }
              : null
          ),
        ],
      };

    default:
      return state;
  }
};

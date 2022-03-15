import {
  FETCH_RENTITEM_FAIL,
  FETCH_RENTITEM_START,
  FETCH_RENTITEM_SUCCESS,
  FETCH_USERRENTITEM_SUCCESS,
} from "../Actions/RentItemAction";



const InitialState = {
  rentitem: [],
  isLoading: false,
  error: "",
  userRent:[],
};

export const FetchItemReducer = (state = InitialState, action) => {

  switch (action.type) {
    case FETCH_RENTITEM_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case FETCH_RENTITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        rentitem: action.payload,
        error: "",
      };
    case FETCH_RENTITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        rentitem: action.payload,
        error: "",
      };
    case FETCH_RENTITEM_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case FETCH_USERRENTITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userRent: action.payload,
      };

    default:
      return state;
  }
};
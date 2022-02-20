import { FETCH_RENTITEM_FAIL, FETCH_RENTITEM_START, FETCH_RENTITEM_SUCCESS } from "../Actions/RentItemAction";



const InitialState = {
  rentitem: [],
  isLoading: false,
  error: "",
};

export const FetchItemReducer = (state = InitialState, action) => {
  switch (action.type) {
    case FETCH_RENTITEM_START :
    return {
        ...state,
        isLoading:true,
        error:""
    }
    case FETCH_RENTITEM_SUCCESS :
    return {
        ...state,
        isLoading:false,
        rentitem :action.payload,
        error:""
    }
    case FETCH_RENTITEM_FAIL :
    return {
        ...state,
        isLoading:false,
        error: action.payload
    }
    
    default:
      return state;
  }
};
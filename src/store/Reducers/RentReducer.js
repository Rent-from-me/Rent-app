import { init } from "../../DummyDate";
import {
  ADD_ITEM,
  DELTEDE_ITEM,
  RENT_ITEM,
  ADD_ITEM_RENT,
} from "../Actions/RentActions";

export const RentReducer = (state = init, action) => {
  console.log(action.payload);
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        HostItem: [
          ...state.HostItem,
          {
            ...action.payload,
            hoster: {
              ...action.hoster,
              name: state.profile.name,
              img: state.profile.img,
            },
          },
        ],
      };
    case ADD_ITEM_RENT:
      return {
        ...state,
        rentItem: [
          ...state.rentItem,
          {...action.payload},
        ],
      };
    case DELTEDE_ITEM:
      return {
        ...state,
        HostItem: state.HostItem.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
};

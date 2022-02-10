import { init } from "../../DummyDate";
import data from "../../db.json"
import {
  ADD_ITEM,
  DELTEDE_ITEM,
  ADD_ITEM_RENT,
  RATING,
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
        rentItem: [...state.rentItem, { ...action.payload }],
      };
    case RATING:
      return {
        ...state,
        HostItem: {
          comments: [
            ...state.HostItem.comments,
            {
              comment:action.payload.comment,
              img: state.profile.img,
              name: state.profile.name.at,
              date: action.payload.date,
            },
          ],
          review: action.payload.star,
        },
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

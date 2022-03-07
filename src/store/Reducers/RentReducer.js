import { init } from "../../DummyDate";

import {
  ADD_ITEM,
  DELTEDE_ITEM,
  ADD_ITEM_RENT,
  RATING,
  UPDATE,
  DELTEDE_ITEM_RENT,
} from "../Actions/RentActions";


export const RentReducer = (state = init, action) => {
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
    case UPDATE:
      return {
        ...state,
        HostItem: state.HostItem.map((item) =>
          item.id === action.id
            ? {
                ...item,
                img: action.payload.img,
                title: action.payload.title,
                price: action.payload.price,
                desc: action.payload.desc,
              }
            : item
        ),
      };
    case DELTEDE_ITEM:
      return {
        ...state,
        HostItem: state.HostItem.filter((item) => item.id !== action.id),
      };
    case ADD_ITEM_RENT:
      return {
        ...state,
        rentItem: [...state.rentItem, { ...action.payload }],
      };

    case RATING:
      return {
        ...state,
        HostItem: state.HostItem.map((item) =>
          item.id === action.id
            ? {
                ...item,
                review: action.payload.star,
                comments: [
                  ...item.comments,
                  {
                    ...action.payload,
                    name: state.profile.name,
                    img: state.profile.img,
                  },
                ],
              }
            : item
        ),
      };

    case DELTEDE_ITEM_RENT:
      return {
        ...state,
        rentItem: state.rentItem.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
};
// state.HostItem.find(item =>
//           item.id === action.id ? {
//           ...state,
//           HostItem
//           {
//             ...item,
//             review : action.payload.star,
//             comments:[
//               ...item.comments,
//               {
//                 name : state.profile.name,
//                 img: state.profile.img,
//                 Comment:action.payload.Comment,
//                 date:action.payload.Comment.date,
//               }
//             ]
//           }
//           }
//           : state

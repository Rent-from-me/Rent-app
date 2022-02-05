import { init } from "../../DummyDate"
import { ADD_ITEM, DELTEDE_ITEM } from "../Actions/RentActions"


export const RentReducer = (state = init, action) => {
       console.log(action.payload);
    switch (action.type) {
      case ADD_ITEM:
        return {
          ...state,
          HostItem: [...state.HostItem, {...action.payload }],
        };
      case DELTEDE_ITEM:
        return {
          ...state,
          HostItem: state.HostItem.filter((item) => item.id !== action.id),
        };

      default:
        return state;
    }
}
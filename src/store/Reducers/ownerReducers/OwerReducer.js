import { OWNER_FETCHITEM_SUCCESS } from "../../Actions/ownerAction/OwnerAction";

const init = {
  ownerItemsCreate: [],
  fechtcreateitem : false
};

export const OwnerReducer = (state = init, action) => {
  
  switch (action.type) {
    case OWNER_FETCHITEM_SUCCESS:
      return {
        ...state,
        ownerItemsCreate: [...action.payload],
        fechtcreateitem: true
      };
    default:
      return state;
  }
};

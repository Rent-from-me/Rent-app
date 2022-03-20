import { OWNER_LOGIN_SUCCESS } from "../../Actions/ownerAction/OwnerLogRegAction";


const init = {
  ownerLogin: false,
};
export const OwnerLogRegReducer = (state = init, action) => {
  switch (action.type) {
    case OWNER_LOGIN_SUCCESS:
      return {
        ...state,
        ownerLogin:true
      };
    default:
      return state;
  }
};

import { HOST_LOGIN_SUCCESS } from "../Actions/HostAction";
import { USER_LOGIN_SUCCESS } from "../Actions/UserAction";

const init = {
  error: null,
  login: false,
  owerLogin:false
};

export const LoginRenterReducer = (state = init, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        login: true
      }
    case HOST_LOGIN_SUCCESS:
      return {
        ...state,
        owerLogin: true
      }
    default:
      return state;
  }
};

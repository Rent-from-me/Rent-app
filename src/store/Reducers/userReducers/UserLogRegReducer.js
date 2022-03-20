import { USER_LOGIN_FAIL, USER_LOGIN_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_SUCCESS } from "../../Actions/userAction/UserLogRegAction";
import { BaseUrl } from "../../../api/axiosAuth";


const init = {
  errorLoginUser: false,
  errorRegisterUser: false,
  login: false,
  owerLogin: false,
  userRent: {},
};

export const UserLogRegReducer = (state = init, action) => {
  switch (action.type) {
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        REGISTER: true,
      };
    case USER_REGISTER_FAIL:
      return {
        ...state,
        errorRegisterUser: true
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        login: true
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        errorLoginUser: true
      };
    default:
      return state;
  }
};

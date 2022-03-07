import { USER_LOGIN_SUCCESS, USER_LOGIN_FAIL } from "../Actions/UserAction";

const init = {
  error: null,
  login: false
};

export const LoginRenterReducer = (state = init, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        login: true
      }
    default:
      return state;
  }
};

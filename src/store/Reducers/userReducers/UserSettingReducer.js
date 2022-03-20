import {
  USER_DELETE_FAIL,
  USER_DELETE_SUCCESS,
  USER_GET_FAIL,
  USER_GET_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_SUCCESS,
} from "../../Actions/userAction/userSettingAction";

const init = {
  user: {},
  userGetFail: false,
  update : false,
  updateFial : false,
  delete: false,
  deleteFial : false,
};

export const UserSettingReducer = (state = init, action) => {

  switch (action.type) {
    case USER_GET_SUCCESS:
      return {
        ...state,
        user:{...action.payload}
      };
    case USER_GET_FAIL:
      return {
        ...state,
        userGetFail: true,
      };
    case USER_UPDATE_SUCCESS:
      return {
        ...state,
        update: true
      };
    case USER_UPDATE_FAIL:
      return {
        ...state,
        updateFail: true,
      };
    case USER_DELETE_SUCCESS:
      return {
        ...state,
        delete:true
      };
    case USER_DELETE_FAIL:
      return {
        ...state,
        deleteFial: true,
      };

    default:
      return state;
  }
};
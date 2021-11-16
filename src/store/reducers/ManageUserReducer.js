import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import { actionType } from "../action/type";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
  userLogin: user,
  // userInfo: {},
  userList: [],
};

const ManageUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_SIGN_IN: {
      localStorage.setItem(USER_LOGIN, JSON.stringify(action.payload));
      localStorage.setItem(TOKEN, action.payload.token);
      return { ...state, userLogin: action.payload };
    }

    // case actionType.SET_USER_INFO: {
    //   state.userInfo = action.userInfo;
    //   return { ...state };
    // }
    case actionType.GET_USER_LIST:
      state.userList = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};
export default ManageUserReducer;

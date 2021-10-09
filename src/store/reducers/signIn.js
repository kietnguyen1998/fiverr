import { actionType } from "../action/type";

const initialState = null;
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_SIGN_IN:
      state = action.payload;
      return { ...state };
    default:
      return state;
  }
};
export default reducer;

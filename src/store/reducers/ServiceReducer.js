import { actionType } from "../action/type";

const initialState = {
  serviceList: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_SERVICE_LIST:
      state.serviceList = action.payload;
      return { ...state };
    default:
      return state;
  }
};
export default reducer;

import { actionType } from "../action/type";

const initialState = {
  mainCategoryList: [],
  subCategoryList: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_MAIN_CATEGORY:
      state.mainCategoryList = action.payload;
      return { ...state };
    case actionType.GET_SUB_CATEGORY:
      state.subCategoryList = action.payload;
      return { ...state };
    default:
      return state;
  }
};
export default reducer;

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import manageUserReducer from "./reducers/ManageUserReducer";
import categoryReducer from "./reducers/CategoryReducer";
import serviceReducer from "./reducers/ServiceReducer";
const reducer = combineReducers({
  manageUserReducer,
  categoryReducer,
  serviceReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

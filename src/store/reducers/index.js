import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const reducer = combineReducers({
  // Khai báo reducer con
 
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
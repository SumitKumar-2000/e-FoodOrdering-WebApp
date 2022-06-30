import { combineReducers, createStore } from "redux";
import { myCartReducer } from "../reducers/foodcart";
import { restaurantReducer } from "../reducers/restaurant";

const reducer = combineReducers({
    Restaurant : restaurantReducer,
    myCart : myCartReducer
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
import cartReducer from "./cartReducer";
import menuPageReducer from "./menuPageReducer";
import { combineReducers } from "redux";

export default combineReducers({
  cartReducer,
  menuPageReducer,
});

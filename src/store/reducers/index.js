import cartReducer from "./cartReducer";
import menuReducer from "./menuReducer";
import { combineReducers } from "redux";

export default combineReducers({
  cartReducer,
  menuReducer,
});

import { combineReducers } from "redux";
import countReducer from "./countReducer";
import inputReducer from "./inputReducer";
import itemListReducer from "./itemListReducer";
import visibleReducer from "./visibleReducer";

const rootReducer = combineReducers({
  countReducer,
  inputReducer,
  itemListReducer,
  visibleReducer
});
export default rootReducer;

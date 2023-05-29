import { combineReducers } from "redux";
import { counter } from "./test";
export default combineReducers({
  counter: counter,
});

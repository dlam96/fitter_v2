import { combineReducers } from "redux";
import hostname from "./hostname";
import logged from "./logged";
import preferences from "./preferences";

export default combineReducers({
  hostname,
  logged,
  preferences
});

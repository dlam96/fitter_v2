import { combineReducers } from "redux";
import hostname from "./hostname";
import logged from "./logged";
import preferences from "./preferences";
import socket from "./socket";
import find from "./find";

export default combineReducers({
  hostname,
  logged,
  preferences,
  socket,
  find
});

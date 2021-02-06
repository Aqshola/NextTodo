import { combineReducers } from "redux";

import auth from "./auth";
import todo from "./todo";
import tag from "./tags";

export default combineReducers({
  auth,
  todo,
  tag,
});

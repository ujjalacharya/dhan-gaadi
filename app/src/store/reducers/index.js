import { combineReducers } from "redux";
import User from "./user_reducer";
import Journey from "./journey_reducer";

const rootReducer = combineReducers({
  User,
  Journey,
});

export default rootReducer;

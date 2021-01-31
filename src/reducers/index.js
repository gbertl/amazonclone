import basket from "./basket";
import user from "./user";
import {combineReducers} from "redux";

const allReducers = combineReducers({
  basket,
  user,
});

export default allReducers;

import basket from "./basket";
import user from "./user";
import {combineReducers} from "redux";

const allReducers = combineReducers({
  basket,
  user,
});

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export default allReducers;

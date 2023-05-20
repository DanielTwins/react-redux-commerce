import { combineReducers } from "redux";
import { productsListReducer, selectedProductReducer } from "./productReducer";

// Combine multiple reducers into a single reducer using combineReducers
const reducers = combineReducers({
  // Set the key string to the reducers functions
  allProducts: productsListReducer,
  product: selectedProductReducer,
});

export default reducers;

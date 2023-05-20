// import the ActionTypes constant from the action-types.js file
import { ActionTypes } from "../constants/productActionTypes";

// set the initial state of the products
const intialState = {
  products: [],
};

// create a productReducer function that takes in state and an action, and returns the new state
// destructure the action parameter to get just the type and payload properties
export const productsListReducer = (state = intialState, { type, payload }) => {
  // use a switch statement to check the action type and update the state accordingly
  switch (type) {
    case ActionTypes.UPDATE_PRODUCTS:
      // if case SET_PRODUCTS, return a new state object with the updated products array
      return { ...state, products: payload };
    case ActionTypes.GET_PRODUCTS:
      // if case FETCH_PRODUCTS, return a new state object with the updated products array
      return { ...state, products: payload };
    default:
      // if the action type doesn't match any of the cases above, return the original state
      return state;
  }
};

// create a selectedProductsReducer function that takes in state and an action, and returns the new state
// destructure the action parameter to get just the type and payload properties
export const selectedProductReducer = (state = {}, { type, payload }) => {
  console.log(type);
  // switch statement to check the action type and update the state based on the action types
  switch (type) {
    case ActionTypes.SET_SELECTED_PRODUCT:
      // if case SELECTED_PRODUCT, return a new state object with the updated product data
      return { ...state, ...payload };
    case ActionTypes.CLEAR_CHOSEN_PRODUCT:
      // if case REMOVE return an empty object to the state to remove the previous selected product
      return {};
    default:
      // if none of these action-types, return the original state
      return state;
  }
};

import productsAPI from "../../api/productsAPI";
import { ActionTypes } from "../constants/productActionTypes";

// Define action creators for fetching, selecting, and removing products

//? Implement a middleware called thunk for making able to call async functions
//? in action creators file. Not allowed to use async without a middleware
export const getProducts = () => async (dispatch) => {
  // Make an API call to get all products
  const response = await productsAPI.get("/products");
  console.log(response);

  // Dispatch the FETCH_PRODUCTS action with the payload of products
  dispatch({
    type: ActionTypes.GET_PRODUCTS,
    payload: response.data.products,
  });
};

export const getProduct = (id) => async (dispatch) => {
  // Make an API call to get a specific product
  const response = await productsAPI.get(`/products/${id}`);
  console.log(response);

  // Dispatch the SELECTED_PRODUCT action with the payload of the selected product
  dispatch({ type: ActionTypes.SET_SELECTED_PRODUCT, payload: response.data });
};

// Define action creators for setting and removing selected products
export const updateProducts = (products) => {
  return {
    type: ActionTypes.GET_PRODUCTS,
    payload: products,
  };
};

export const setChosenProduct = (product) => {
  return {
    type: ActionTypes.SET_SELECTED_PRODUCT,
    payload: product,
  };
};

export const clearChosenProduct = () => {
  return {
    type: ActionTypes.CLEAR_CHOSEN_PRODUCT,
  };
};

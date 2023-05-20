import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import reducers from "./reducers/index";
// Importing redux-thunk middleware for handling asynchronous actions
import thunk from "redux-thunk"; 

// Creating a composeEnhancers constant to enable use of Redux DevTools extension in the browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

// Creating the Redux store using the combined reducers, composeEnhancers and applyMiddleware to enable middleware usage
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk))); 

export default store; 

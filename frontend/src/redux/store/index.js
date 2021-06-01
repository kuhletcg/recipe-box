import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { recipeReducer } from "../reducer/recipe";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  recipeReducer,
  composeEnhancer(applyMiddleware(thunk))
);

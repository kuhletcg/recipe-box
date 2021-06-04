import axios from "axios";
import {
  ADD_RECIPE,
  DELETE_RECIPE,
  EDIT_RECIPE,
  GET_RECIPES,
} from "../actionTypes/recipe";

export const getRecipe = () => {
  return (dispatch) => {
    axios.get("http://localhost:4500/api/recipe").then((response) =>
      dispatch({
        type: GET_RECIPES,
        payload: response.data,
      })
    );
  };
};
export const addRecipe = (recipe) => {
  return (dispatch) => {
    axios.post("http://localhost:4000/api/recipe", recipe).then((response) =>
      dispatch({
        type: ADD_RECIPE,
        payload: response.data,
      })
    );
  };
};

export const deleteRecipe = (id) => {
  return (dispatch) => {
    axios.delete(`http://localhost:4500/api/recipe/${id}`).then((response) => {
      dispatch({
        type: DELETE_RECIPE,
        payload: id,
      });
    });
  };
};
export const editRecipe = (obj) => {
  const { id, newIngredients } = obj;
  return (dispatch) => {
    axios
      .put(`http://localhost:4500/api/recipe/${id}`, { newIngredients })
      .then((response) => {
        dispatch({
          type: EDIT_RECIPE,
          payload: obj,
        });
      });
  };
};

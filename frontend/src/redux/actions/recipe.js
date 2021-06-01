import axios from "axios";
import {
  ADD_RECIPE,
  DELETE_RECIPE,
  EDIT_RECIPE,
  GET_RECIPES,
} from "../actionTypes/recipe";

export const getRecipe = () => {
  return (dispatch) => {
    axios.get("http://localhost:4500/api/recipe").then((res) =>
      dispatch({
        type: GET_RECIPES,
        payload: res.data,
      })
    );
  };
};
export const addRecipe = (recipe) => {
  return (dispatch) => {
    axios.post("http://localhost:4000/api/recipe", recipe).then((res) =>
      dispatch({
        type: ADD_RECIPE,
        payload: res.data,
      })
    );
  };
};

export const deleteRecipe = (id) => {
  return (dispatch) => {
    axios.delete(`http://localhost:4500/api/recipe/${id}`).then((res) => {
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
      .then((res) => {
        dispatch({
          type: EDIT_RECIPE,
          payload: obj,
        });
      });
  };
};

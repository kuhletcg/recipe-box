import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipe } from "../redux/actions/recipe";

import Recipe from "./Recipe";

function RecipeList() {
  const recipeList = useSelector((state) => state.recipeList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipe());
  }, [dispatch]);
  return (
    <div>
      {recipeList.map((recipe) => {
        return <Recipe key={recipe._id} {...recipe} />;
      })}
    </div>
  );
}

export default RecipeList;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipe } from "../redux/actions/recipe";
import { Container } from "reactstrap";

import Recipe from "./Recipe";

function RecipeList() {
  const recipeList = useSelector((state) => state.recipeList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipe());
  }, [dispatch]);
  return (
    <Container>
      {recipeList.map((recipe) => {
        return <Recipe key={recipe._id} {...recipe} />;
      })}
    </Container>
  );
}

export default RecipeList;

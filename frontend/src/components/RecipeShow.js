import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Container, FormGroup } from "reactstrap";
import { addRecipe } from "../redux/actions/recipe";

function RecipeShow() {
  const [formData, setFormData] = useState({
    recipe: "",
    ingredients: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.recipe && formData.ingredients) {
      dispatch(addRecipe(formData));
      setFormData({
        recipe: "",
        ingredients: "",
      });
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} className="recipe-form">
        <FormGroup>
          <label for="recipe">Recipe</label>
          <input
            type="text"
            name="recipe"
            onChange={handleChange}
            placeholder="Enter recipe "
            value={formData.recipe}
          />
        </FormGroup>
        <FormGroup>
          <label for="imgredients">ingredients</label>
          <input
            type="textarea"
            name="ingredients"
            id=""
            onChange={handleChange}
            placeholder="Enter ingredients"
            value={formData.ingredients}
          />
        </FormGroup>
        <button type="submit">Add to a recipe</button>
      </form>
    </Container>
  );
}

export default RecipeShow;

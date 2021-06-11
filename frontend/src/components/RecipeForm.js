import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRecipe } from "../redux/actions/recipe";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import { useHistory } from "react-router-dom";

function RecipeForm() {
  const [formData, setFormData] = useState({
    recipe: "",
    ingredients: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();

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
      <Form onSubmit={handleSubmit} className="recipe-form">
        <FormGroup>
          {/* <h1>RECIPE BOX</h1> */}
          <h1 class="font-effect-fire">RECIPE BOX</h1>

          <Label for="recipe">Recipe</Label>
          <Input
            type="text"
            name="recipe"
            onChange={handleChange}
            id="recipe"
            placeholder="Enter recipe "
            value={formData.recipe}
          />
        </FormGroup>
        <FormGroup>
          <Label for="ingredients">Ingredients</Label>
          <Input
            type="textarea"
            name="ingredients"
            id="ingredients"
            onChange={handleChange}
            placeholder="Enter ingredients"
            value={formData.ingredients}
          />
        </FormGroup>
        <Button color="primary">Add to a recipe</Button>
      </Form>
    </Container>
  );
}

export default RecipeForm;

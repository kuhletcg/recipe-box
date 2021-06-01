import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
    <div>
      <form onSubmit={handleSubmit} className="recipe-form">
        <input
          type="text"
          name="recipe"
          onChange={handleChange}
          placeholder="Enter recipe "
          value={formData.recipe}
        />
        <textarea
          name="ingredients"
          id=""
          onChange={handleChange}
          placeholder="Enter ingredients"
          value={formData.ingredients}
        ></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default RecipeShow;

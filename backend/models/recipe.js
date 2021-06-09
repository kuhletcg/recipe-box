const { Schema, model } = require("mongoose");

const RecipeSchema = new Schema({
  recipe: {
    type: String,
    require: true,
  },
  ingredients: {
    type: String,
    require: true,
  },
});

const Recipe = model("Recipe", RecipeSchema);

module.exports = Recipe;

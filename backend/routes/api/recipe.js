const Recipe = require("../../model/recipe");

const recipeRoutes = (app) => {
  app.get("/api/recipe", async (request, response) => {
    try {
      const results = await Recipe.find();
      response.status(200).send(results);
    } catch (error) {
      res.status(404).send(error);
    }
  });
  app.post("/api/recipe", async (request, response) => {
    const { recipe, ingredients } = request.body;
    try {
      const newRecipe = await Recipe({
        recipe,
        ingredients,
      }).save();
      response.status(201).send(newRecipe);
    } catch (error) {
      response.status(400).send(error);
    }
  });
  app.delete("/api/recipe/:id", async (request, response) => {
    try {
      const recipe = await Recipe.findById({ _id: request.params.id });
      const deletedRecipe = await recipe.deleteOne();
      response.status(200).send(deletedRecipe);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  app.put("/api/recipe/:id", async (request, response) => {
    try {
      const updatedRecipe = await Recipe.updateOne(
        { _id: request.params.id },
        {
          ingredients: request.body.newIngredients,
        }
      );
      response.status(201).send(updatedRecipe);
    } catch (error) {
      res.status(400).send(error);
    }
  });
};
module.exports = { recipeRoutes };

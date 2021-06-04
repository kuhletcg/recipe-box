const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const cors = require("cors");
const { recipeRoutes } = require("./routesapi/recipe");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
recipeRoutes(app);
app.listen(4500, () => console.log(`Server running on port 4500...`));

const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const PORT = 4500;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

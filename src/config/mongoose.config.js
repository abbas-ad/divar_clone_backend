const { default: mongoose } = require("mongoose");

require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log(err?.message ?? "Failed to connect to the database");
  });

const mongoose = require("mongoose");
const URI = process.env.MONGO_DB;

mongoose
  .connect(URI)
  .then((res) => {
    console.log("Connection Established to database");
  })
  .catch((error) => {
    console.log("Could not connect to database");
  });

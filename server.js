const express = require("express");
const app = express();
require("dotenv").config();
require("./database/connection");

const port = process.env.PORT;

app.use(express.json());

const productRouter = require("./router/product");

app.use("/api", productRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

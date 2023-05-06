const express = require("express");
const app = express();
require("dotenv").config();
require("./database/connection");

const port = process.env.PORT;

app.use(express.json());

const productRouter = require("./router/product");
const orderRouter = require("./router/order");

app.use("/api", productRouter);
app.use("/api", orderRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

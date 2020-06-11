const express = require("express");
const path = require("path");

const Router = express.Router();
Router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
});
Router.post("/product", (req, res) => {
  console.log(req.body.firstName);
  // res.send("product received");
});

module.exports = Router;

const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();
const adminData = require("./admin");
router.get("/", (req, res, next) => {
  const { products } = adminData;
  res.render("shop", { products, docTitle: "Shop" });
});

module.exports = router;

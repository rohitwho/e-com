const route = require("express").Router();
const ProductList = require("../../models/products");

route.get("/men'sProducts", async (req, res) => {
  try {
    const findAll = await ProductList.find();
    res.json(findAll);
  } catch (err) {
    console.log(err);
  }
});
route.get("/MenProduct/:id", async (req, res) => {
  try {
    const product = await ProductList.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
  } catch (err) {
    console.error(err);

    res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = route;

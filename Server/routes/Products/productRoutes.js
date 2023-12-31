const route = require("express").Router();


const ProductList = require("../../models/products");

route.get("/MenProduct", async (req, res) => {
  try {
    const findAll = await ProductList.find({ listType: "MEN" });

    res.json(findAll);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

route.post("/PostProduct", async (req, res) => {
  try {
    const { productName, productDescription, productCategory, productPrice } =
      req.body;
  console.log(req.body);

    const postProduct = await ProductList.create({
      productName,
      productDescription,
      productCategory,
      productPrice
    });
    res.status(200).json(postProduct);
  } catch (err) {
    console.log(err);
  }
});

route.get("/women'sProducts", async (req, res) => {
  try {
    const findAll = await ProductList.find({ listType: "WOMEN" });
    res.json(findAll);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

route.get("/Accessories", async (req, res) => {
  try {
    const findAll = await ProductList.find({ listType: "Accessories" });
    res.json(findAll);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
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
route.get("/women'sProducts/:id", async (req, res) => {
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
route.get("/Accessories/:id", async (req, res) => {
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

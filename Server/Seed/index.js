const ProductList = require("../models/products");
const products = require("./products.json");
const db = require("../config/Connection");

db.once("open", async () => {
  try {
    await ProductList.deleteMany({});
    await ProductList.insertMany(products);
    console.log('Data has been Seeded!');
    process.exit(0);
  } catch (err) {
    console.log("An Error has Ocurred while Seeding the Data " + err);
  }
});

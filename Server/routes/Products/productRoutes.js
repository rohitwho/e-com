const route = require("express").Router();
const ProductList  = require("../../models/products");

route.get("/men'sProducts", async (req, res) => {
  try {
    const findAll = await ProductList.find();
    res.json(findAll);
  } catch (err) {
    console.log(err);
  }
});
route.get("/Product/:id",async (req,res)=>{
  try{
    const findOne = await ProductList.findById(req.query.id)
    res.json(findOne)

  }catch(err){
    console.log(err)
  }
})
module.exports = route;

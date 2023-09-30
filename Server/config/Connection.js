const mongoose = require("mongoose");


 mongoose.connect("mongodb://127.0.0.1:27017/e-comm" || "mongodb+srv://rohitnayyar54:160298Rn!@book-search-engine.povauw9.mongodb.net/ShopAll",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const db = mongoose.connection

module.exports = db



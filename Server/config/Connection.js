const mongoose = require("mongoose");


 mongoose.connect(   'mongodb+srv://rohitnayyar54:160298rn!@book-search-engine.povauw9.mongodb.net/ShopAll' ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const db = mongoose.connection



module.exports = db



// "mongodb://127.0.0.1:27017/e-comm" ||
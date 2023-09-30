const mongoose = require("mongoose");


 mongoose.connect( "mongodb+srv://rohitnayyar54:160298rn!@book-search-engine.povauw9.mongodb.net/ShopAll",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const db = mongoose.connection

module.exports = db




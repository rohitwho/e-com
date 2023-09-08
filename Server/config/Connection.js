const mongoose = require("mongoose");


 mongoose.connect("mongodb://localhost:27017/e-comm",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const db = mongoose.connection

module.exports = db

// const connection = mongoose
//   .createConnection("mongodb://127.0.0.1:27017/e-comm")
//   .asPromise();
// connection.readyState;

// module.exports = connection;

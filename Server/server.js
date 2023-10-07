const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./config/Connection");
const routes = require("./routes/Products/productRoutes");
const path = require("path");
const dotenv = require ("dotenv").config()
const bodyParser = require('body-parser');


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../Client/dist/")));
}


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Client/dist/index.html"));
});
app.use("/", express.static(path.join(__dirname, "public")));
// const multer = require('multer');
// const storage = multer.diskStorage({
//   destination: './Client/src/assets/HomePage', // Specify the destination folder where files will be stored
//   filename: (req, file, callback) => {

//     // Specify how the uploaded file should be named (you can customize this)
//     callback(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server is Up and Running on http://localhost${PORT}`);
  });
});

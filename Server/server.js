const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./config/Connection");
const routes = require("./routes/Products/productRoutes")
const PORT = 3001;

app.use(cors());
app.use(routes)

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server is Up and Running on http://localhost${PORT}`);
  });
});

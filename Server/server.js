const express = require("express")
const app = express();
const cors = require("cors")
const PORT = 3001;

app.use(cors());






app.listen(PORT,()=>{
    console.log(`Server is Up and Running on http://localhost${PORT}`)
})
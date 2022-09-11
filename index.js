const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());

const port = 7000;

app.get("/download", (req, res) => {
  res.download("./res.pdf");
});

app.listen(7000, () => {
  console.log(`server is running on port ${port}:`);
});

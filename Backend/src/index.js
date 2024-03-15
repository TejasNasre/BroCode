const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const auth = require("./routes/auth.js");
require("./db/index.js");

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello World");
});


app.use("/api/v1", auth);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port http://localhost:${process.env.PORT}/`);
});
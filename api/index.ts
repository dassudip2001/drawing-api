require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

console.log(port);

const bodyParser = require("body-parser");
const path = require("path");

// Create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "components", "home.htm"));
});

app.listen(port, () => console.log("Server ready on port ", port));

module.exports = app;

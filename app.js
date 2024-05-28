require('dotenv').config()
const express = require("express");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 8080;

// Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Server static content
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    name: "Diego",
    title: "Node.js course"
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    name: "Diego",
    title: "Node.js course"
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    name: "Diego",
    title: "Node.js course"
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express");
const handlebars = require("express-handlebars");
const mysql = require("mysql");


let app = express();
let path = require('path');
var PORT = process.env.PORT || 3000;

// Set Handlebars as the default templating engine.
app.use(express.static(path.join(__dirname, '/public')));

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const lunches = [
  {
    lunch: "Beet & Goat Cheese Salad with minestrone soup."
  }, {
    lunch: "Pizza, two double veggie burgers, fries with a Big Gulp"
  }, {
    lunch: "dgdgjdlkgjdljgldskgjldsgjlds"
  }
];



app.get("/", function(req, res) {
  res.render("index", lunches[0]);
});

//used with a routing files router.get > res.sendfile(html file) > module.exports = router;
//const htmlroute = require("./app/routing/htmlRoutes.js");





app.listen(PORT, function() {
  console.log(`Server listening on: http://localhost:${PORT}`);
});


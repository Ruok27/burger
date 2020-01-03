const express = require("express");
const handlebars = require("express-handlebars");
const mysql = require("mysql");


let app = express();
let path = require('path');

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

var PORT = process.env.PORT || 3000;

// Set Handlebars as the default templating engine.


app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const lunches = [
  {
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


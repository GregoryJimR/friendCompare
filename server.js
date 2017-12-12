var express = require('express');
var path = require("path");
var bodyParser = require("body-parser");
var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");

var PORT = process.env.PORT || 8080;
var app = express();


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

/* ASSIGNMENT 15 - Burger 2: The Sequel
Setting up server and syncing sequelize */ 

// Dependencies
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var routes = require("./routes/burger-routes.js");

var db = require("./models");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

// Set Handlebars.js
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Give server access to our routes
app.use("/", routes);

db.sequelize.sync().then(function(){
	app.listen(PORT, function(){
		console.log("You are connected on port " + PORT);
	});
});


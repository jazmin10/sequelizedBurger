/* Burger 2: The Sequel
Setting up routes */ 

var express = require("express");
var db = require("../models");

var router = express.Router();

// Sets up routes for READ, CREATE, and PUT

router.get("/", function(readReq, readRes){

	db.Burger.findAll({}).then(function(data){
		var hbsObject = { burgers: data};
		
		readRes.render("index", hbsObject);
	})
});

router.post("/", function(createReq, createRes){

	db.Burger.create({
		burger_name: createReq.body.newBurger
	}).then(function(){
		createRes.redirect("/");
	});
});

router.put("/:id", function(updateReq, updateRes){

	db.Burger.update({
		devoured: true
	}, {
		where: {
			id: updateReq.params.id
		}
	}).then(function(){
		updateRes.redirect("/");
	})
});

module.exports = router;

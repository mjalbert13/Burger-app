var express = require("express");
var router = express.Router();
var burgers = require("../models/burger.js");




router.get("/", function(req, res){
    burgers.all(function(data){
        var hbsObj = {
            burgers: data
        };
        console.log(hbsObj);
        res.render("index", hbsObj);
    });
});

router.post("/", function(req, res){
    burgers.create(["burger_name"],[req.body.burger_name], function(res){
        res.redirect("/");
    });
});

router.put("/:id", function(req, res){

    var condition = "id = "+ req.params.id;
    console.log("Condition: "+condition);

    burgers.update({ devoured: req.body.devoured}, condition, function(res){
        
        res.redirect("/")
        
    });
});

module.exports = router;
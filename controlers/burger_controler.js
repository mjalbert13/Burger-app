var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObj = {
            burgers: data
        };
        console.log(hbsObj);
        res.render("index", hbsObj);
    });
});

router.post("/api/burgers", function(req, res){
    burger.create(["burger_name"],[req.body.burger_name], function(res){
        res.json({id: res.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res){

    var condition = "id = "+ req.params.id;
    burger.update({ devoured: req.body.devoured}, condition, function(res){
        if( res.changedRows == 0){
            return res.status(404).end();
        }else{
            return res.status(200).end();
        }
    });
});

module.exports = router;
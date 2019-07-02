var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObj = {
            burgers: data
        };
        console.log("\n====Router js object===\n")
        console.log(hbsObj);
        res.render("index", hbsObj);
    });
});

router.post("/burgers", function(req, res){
    console.log("\n=== Attempting to create burger  =====\n")
    burger.create([
        "burger_name", "devoured"
    ],[
        req.body.burger_name, req.body.devoured
    ], function(result){
        console.log("\nrouter js post method\n")
        res.json({id: result.insertId});
    });
});

router.put("/burgers/:id", function(req, res){
    console.log("\n====== Attempting to devour burger=======\n")
    var condition = "id = "+ req.params.id;
    console.log("Condition: "+condition);

    burger.update({
         devoured: req.body.devoured
        }, condition, function(result){
            if(result.changedRows == 0){
                return res.status(404).end();
            }else{
                console.log("\n router.js put method\n")
                res.status(200).end();
            }    
    });
});
console.log("\n============Found the router=============\n")
module.exports = router;
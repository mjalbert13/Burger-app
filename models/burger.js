var orm = require("../config/orm.js");

var burger = {

    all: function(cb){
        orm.all("burgers", function(res){
            console.log("\n=== Burger model All ====\n")
            cb(res);
        });
    },

    create: function(col, vals, cb){
        orm.create("burgers",col, vals, function(res){
            console.log("\n======= burger model create=======\n")
            cb(res);
        });
    },

    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res){
            console.log("\n======== Burger model update ========\n")
            cb(res);
        });
    }
};

module.exports = burger;
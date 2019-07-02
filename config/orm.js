var connection = require("../config/connection.js");

function printQuestionMarks(num){
    var arr = [];

    for(var i = 0; i < num; i++){
        arr.push("?");
    }
    console.log("Printed question marks:  "+arr.toString())
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for(var key in ob){
        var val =ob[key];

        if(Object.hasOwnProperty.call(ob,key)){
            if(typeof val === "string" && val.indexOf("") >= 0){
                val =" "+val+" ";
            }
            arr.push(key+"="+val);
        }
    }
    console.log("\n==== orm objToSql =====\n"+ arr.toString());
    return arr.toString();
}

var orm = {

    all: function(tableInput, cb){
        var queryString = "SELECT * FROM "+tableInput+";";
        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result)
            console.log("\n========== ORM All is working============\n")
        });
    },

    create: function(table, cols,  vals, cb){
        var queryString = "INSERT INTO "+table;

        console.log("Qstring:  "+queryString+"====\n");

        queryString +=  " (";
        queryString +=  cols.toString();
        queryString +=   ") ";
        queryString +=  "VALUES (";
        queryString +=  printQuestionMarks(vals.length);
        queryString +=  ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result){
            if(err) throw err;
            cb(result);
            console.log("\n======= ORM Create working ======\n")
        });
    },

    update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE "+table;

        queryString +=  " SET ";
        queryString += objToSql(objColVals);
        queryString +=  " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err,result){
            if(err) throw err;
            
            cb(result);
            console.log("\n==========ORM Update working =========\n")
        });
    }
};

module.exports = orm;
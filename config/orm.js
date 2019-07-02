var connection = require("../config/connection.js");

function printQuestionMarks(num){
    var arr = [];

    for(var i = 0; i < num; i++){
        arr.push("?");
    }
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
    return arr.toString();
}

var orm = {

    all: function(tableInput, cb){
        var queryString = "SELECT * FROM "+tableInput+";";
        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },

    create: function(tableInput, col,  vals, cb){
        var queryString = "INSERT INTO "+tableInput;

        queryString +=  " (";
        queryString +=  col.toString();
        queryString +=   ") ";
        queryString +=  "VALUES (";
        queryString +=  printQuestionMarks(vals.length);
        queryString +=  ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },

    update: function(tableInput, objColVals, colVal, cb) {
        var queryString = "UPDATE "+tableInput;

        queryString +=  " SET ";
        queryString += objToSql(objColVals);
        queryString +=  " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, [true, colVal],function(err,result){
            if(err) throw err;
            
            cb(result);
        });
    }
};

module.exports = orm;
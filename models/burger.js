const orm = require('../config/orm.js');
// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.

let burger = {
    all: function(cb){
        orm.selectAll("burger", function(res){
            cb(res);
        })
    },
    create: function(cols, vals, cb){
        orm.insertOne("burer", cols, vals, function(res){
            cb(res);
        });
    },
    update: function(objColVals, condition, cb){
        orm.update("burger", objColVals, condition, function(res){
            cb(res);
        });
    }
};

// Export 
module.exports = burger;
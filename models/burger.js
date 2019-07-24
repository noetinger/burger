//Import connection for ORM
const orm = require('../config/orm.js');


let burger = {
    selectAll: function (cb) {
        orm.selectAll("burger", function (res) {
            cb(res);
        })
    },
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burger", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burger", objColVals, condition, function (res) {
            cb(res);
        });
    }
};

// Export 
module.exports = burger;
const express = require('express');
const router = express.Router();

//Import model for database/ORM functions
const burger = require('../models/burger.js');

//get all data
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        console.log("Select All Activated")
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//insert(create) new burger
router.post("/burger", function (req, res) {
    console.log("Insert One Activated")

    burger.insertOne([
            'burger_name'
        ],
        [
            req.body.burger_name
        ],
        function (result) {
            res.redirect('/')
        });
});


//Update
router.put("/burger/:id", function (req, res) {
    console.log("Put Activated")
    let condition = 'id = ' + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: true
    }, condition, function (data) {
        res.redirect("/");
    });
});
  
//export the router
module.exports = router;
const express = require('express');

const router = express.Router();

//Import model for database/ORM functions
const burger = require('../models/burger.js');

//Router for the app

//get all data
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//insert(create) new burger
router.post("/api/burger", function (req, res) {
    burger.insertOne([
            burger_name
        ],
        [
            req.body.name
        ],
        function (result) {
            res.json({
                id: result.insertId
            });
        });
});


//Update
router.put("/api/burger/:id", function (req, res) {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: true
    }, conditon, function (data) {
        res.redirect("/");
    });
});

//export the router
module.exports = router;
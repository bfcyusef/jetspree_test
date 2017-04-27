var express = require("express");
var router = express.Router();
var fs = require('fs');

router.get("/", function(req, res) {
    res.render('index', { title: 'yusef_jetspree_test' });
});

router.get("/add_item", function(req, res) {
    // res.send(" for yusef test");
    res.render('add_item', { title: 'yusef_jetspree_test' });
});


module.exports = router;
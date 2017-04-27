var express = require("express");
var router = express.Router();
var fs = require('fs');

router.get("/", function(req, res) {
    res.send(" for yusef test api");
});

function aa(req, res) {
    res.send(" for yusef test api");
}

router.get("/countries", function(req, res) {

    fs.readFile('./countryList.json', 'utf8', function(err, file_data) {
        if (err)
            return console.log(err);

        data = JSON.parse(file_data);
        res.send({ "success": "true", "result": data.countries });
    });

});


router.get("/item", function(req, res) {

    fs.readFile('./itemList.json', 'utf8', function(err, file_data) {
        if (err)
            return console.log(err);

        data = JSON.parse(file_data);
        res.send({ "success": "true", "result": data.items });
    });
});


router.post("/item/add", function(req, res) {

    fs.readFile('./itemList.json', 'utf8', function(err, file_data) {
        if (err)
            console.log(err);

        data = JSON.parse(file_data);
        data.items.push(req.body);
        posted_data = JSON.stringify(data);
        fs.writeFile('./itemList.json', posted_data, 'utf8', function(err) {
            if (err)
                return console.log(err);

            res.send({ "success": "true", "result": req.body });

        });

    });
});



module.exports = router;
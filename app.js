var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var apiRoutes = require("./routes/api");
var viewRoutes = require("./routes/view");

app.use('/', viewRoutes);
app.use('/api', apiRoutes);

var server = app.listen(3000, function() {
    console.log("Listening on port %s...", server.address().port);
});
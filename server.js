var express = require("express");
var bodyParser = require("body-parser");
var method_override = require("method-override");
var port = process.env.PORT || 9292;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
var moment = require('moment');
// Set Handlebars.
var exphbs = require("express-handlebars");
var hbs = require("handlebars");
hbs.registerHelper("formatDate", function(date) {
    date = "eaten at "+moment(date).format("h:mma on dddd");
    return date;
});
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);

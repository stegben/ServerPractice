var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var api_router = require(__dirname + "/routes/api");

app.use(express.static(__dirname + '/public'));
app.use("/api", api_router);
app.use("/", function(req, res){
  res.send("<h1>Home page</h1>");
});
app.use(function(req, res){
  res.status(404).send("<h3>wrong address</h3>")
});

app.listen(8080);

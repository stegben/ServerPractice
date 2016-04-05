var express = require("express");
var app = express();
var router = express.Router();

router.get("/", function(req, res){
  res.send("<h1>Home page</h1>");
});

router.get("/api/query", function(req, res){
  var res_json = {
    x: req.query['x'],
    y: req.query['y']
  };
  res.json(res_json);
});

app.use("/", router);
app.listen(8080);

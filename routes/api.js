var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var router = express.Router();


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get("/query", function(req, res){
  var res_json = {
    x: req.query['x'],
    y: req.query['y']
  };
  res.json(res_json);
});

router.get("/user/:id", function(req, res){
  if (req.params.id === '1') {
    res.json({ id: 1, name: "Joe", age: 18 });
  } else if (req.params.id === '2') {
    res.json({ id: 2, name: "John", age: 22 });
  } else {
    res.status(404).send("<h1>Wrong user ID<h1>");
  };
});

router.post("/body", function(req, res){
  res.send(JSON.stringify(req.body));
});

router.use(function(req, res){
  res.status(404).send("<h3>wrong api address</h3>")
});

module.exports = router;

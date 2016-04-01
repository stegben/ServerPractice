var express = require("express");
var app = express();
var router = express.Router();

router.use("/", function(rep, res){
  res.send("Hello World!")
});

app.use("/", router);
app.listen(8080);

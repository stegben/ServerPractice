var express = require("express");
var app = express();
var router = express.Router();

router.get("/", function(rep, res){
  res.send("<h1>Home page</h1>")
});

app.use("/", router);
app.listen(8080);

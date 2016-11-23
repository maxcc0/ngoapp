var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
app.use(express.static(__dirname + "/dist"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'tutorial-db-instance.cili1k8ns5gz.us-east-1.rds.amazonaws.com',
//   user     : 'tutorial_user',
//   password : 'mysql123',
//   database : 'domutthi_ka_dum'
// });

const sql = "CREATE TABLE MyGuests ( id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, firstname VARCHAR(30) NOT NULL, lastname VARCHAR(30) NOT NULL, email VARCHAR(50), reg_date TIMESTAMP)";
const select = 'select * from MyGuests';

  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

app.get("/mutthikadam/:id", function(req, res) {
});

app.post("/api/pledge", function(req, res) {
  console.log(req.body);
  res.status(200).send();
});

app.delete("/mutthikadam/:id", function(req, res) {
});
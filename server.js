var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var CONTACTS_COLLECTION = "public";

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'tutorial-db-instance.cili1k8ns5gz.us-east-1.rds.amazonaws.com',
  user     : 'tutorial_user',
  password : 'mysql123',
  database : 'domutthi_ka_dum'
});

const sql = "CREATE TABLE MyGuests ( id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, firstname VARCHAR(30) NOT NULL, lastname VARCHAR(30) NOT NULL, email VARCHAR(50), reg_date TIMESTAMP)";
const select = 'select * from MyGuests';
connection.connect();
connection.query(sql, function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

connection.end();

  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

app.get("/health", function(req, res) {
connection.connect();
connection.query(select, function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
  res.status(200).json(rows[0].solution); 
});

connection.end();
});


app.get("/mutthikadam/:id", function(req, res) {
  db.collection(CONTACTS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get mutthikadam");
    } else {
      res.status(200).json(doc);  
    }
  });
});

app.put("/mutthikadam/:id", function(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;

  db.collection(CONTACTS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to update mutthikadam");
    } else {
      res.status(204).end();
    }
  });
});

app.delete("/mutthikadam/:id", function(req, res) {
  db.collection(CONTACTS_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
    if (err) {
      handleError(res, err.message, "Failed to delete mutthikadam");
    } else {
      res.status(204).end();
    }
  });
});
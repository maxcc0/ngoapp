var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var pg = require('pg');

var CONTACTS_COLLECTION = "mutthikadam";

var app = express();
app.use(express.static(__dirname + "/mutthikadam"));
app.use(bodyParser.json());

// var config = {
  // user: 'foo',
  // database: 'my_db',
  // password: 'secret',
  // host: 'localhost',
  // port: 5432,
  // max: 10,
  // idletimeoutmillis: 30000,
// };
// var pool = new pg.pool(config);
// pool.connect(function(err, client, done) {
  // if(err) {
    // return console.error('error fetching client from pool', err);
  // }
  // client.query('select $1::int as number', ['1'], function(err, result) {
    // done();

    // if(err) {
      // return console.error('error running query', err);
    // }
    // console.log(result.rows[0].number);
  // });
// });

// pool.on('error', function (err, client) {
  // console.error('idle client error', err.message, err.stack)
// })

// var client = new pg.client();
// client.connect(function (err) {
  // client.query('select $1::text as name', ['brianc'], function (err, result) {
    // if (err) throw err;
    // console.log("running");
    // client.end(function (err) {
      // if (err) throw err;
    // });
  // });
// });

  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

app.get("/mutthikadam", function(req, res) {
  db.collection(CONTACTS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get mutthikadam.");
    } else {
      res.status(200).json(docs);  
    }
  });
});

app.post("/mutthikadam", function(req, res) {
  var newContact = req.body;
  newContact.createDate = new Date();

  if (!(req.body.firstName || req.body.lastName)) {
    handleError(res, "Invalid user input", "Must provide a first or last name.", 400);
  }

  db.collection(CONTACTS_COLLECTION).insertOne(newContact, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new mutthikadam.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
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
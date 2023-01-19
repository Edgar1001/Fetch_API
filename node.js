
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', function(req, res) {
  MongoClient.connect('mongodb://localhost:27017/mydb', function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var query = { username: req.body.username, password: req.body.password };
    dbo.collection("users").find(query).toArray(function(err, result) {
      if (err) throw err;
      if (result.length > 0) {
        // Valid login
        res.send('Welcome ' + req.body.username + '!');
      } else {
        // Invalid login
        res.send('Invalid username or password');
      }
      db.close();
    });
  });
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});


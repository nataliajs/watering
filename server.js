var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var USERS_COLLECTION = "users";
var PLACES_COLLECTION = "places";

var app = express();
app.use(bodyParser.json());

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,OPTIONS,POST,DELETE');
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

    next();
}
app.use(allowCrossDomain);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('dist'));
}

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test", function (err, client) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = client.db();
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// CONTACTS API ROUTES BELOW
// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/*  "/api/users"
 *    GET: finds all users
 *    POST: creates a new user
 */

app.get("/api/users", function(req, res) {
  db.collection(USERS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get users.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/api/users", function(req, res) {
  var newContact = req.body;

  if (!req.body.name) {
    handleError(res, "Invalid user input", "Must provide a name.", 400);
  }

  db.collection(USERS_COLLECTION).insertOne(newContact, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new user.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

/*  "/api/users/:id"
 *    GET: find user by id
 *    PUT: update user by id
 *    DELETE: deletes user by id
 */

app.get("/api/users/:id", function(req, res) {
  db.collection(USERS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get contact");
    } else {
      res.status(200).json(doc);
    }
  });
});

app.put("/api/users/:id", function(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;

  db.collection(USERS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to update user");
    } else {
      updateDoc._id = req.params.id;
      res.status(200).json(updateDoc);
    }
  });
});

app.delete("/api/users/:id", function(req, res) {
  db.collection(USERS_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
    if (err) {
      handleError(res, err.message, "Failed to delete user");
    } else {
      res.status(200).json(req.params.id);
    }
  });
});

// PLACES API ROUTES
/*  "/api/places"
 *    GET: finds all places
 *    POST: creates a new place
 */
/*
* {
*   id: 0,
*   name: '',
*   description: '',
*   image: '',
*   plants: [],
* }
*/
app.get("/api/places", function(req, res) {
  db.collection(PLACES_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get places.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/api/places", function(req, res) {
  var newContact = req.body;

  if (!req.body.name) {
    handleError(res, "Invalid place input", "Must provide a name.", 400);
  }

  db.collection(PLACES_COLLECTION).insertOne(newContact, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new place.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

/*  "/api/places/:id"
 *    GET: find place by id
 *    PUT: update place by id
 *    DELETE: deletes place by id
 */

app.get("/api/places/:id", function(req, res) {
  db.collection(PLACES_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get place");
    } else {
      res.status(200).json(doc);
    }
  });
});

app.put("/api/places/:id", function(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;

  db.collection(PLACES_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to update place");
    } else {
      updateDoc._id = req.params.id;
      res.status(200).json(updateDoc);
    }
  });
});

app.delete("/api/places/:id", function(req, res) {
  db.collection(PLACES_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
    if (err) {
      handleError(res, err.message, "Failed to delete place");
    } else {
      res.status(200).json(req.params.id);
    }
  });
});

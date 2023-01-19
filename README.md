# Fetch_API

It will display a webpage with the following elements:

1. A title "Fetch API_Website" in the browser tab
2. A login form with the following fields:
A label "Username:" and a text input field for the user to enter their username
A label "Password:" and a password input field for the user to enter their password
A submit button labeled "Submit"
3. The form uses the "POST" method and the action attribute of the form is set to "/login" which
means that when the user submits the form, the browser will send a POST request to the server at the URL '/login' with the data entered in the form fields.


Node.js:

1. The first two lines require the Express and body-parser modules, and create an Express application.
2. The bodyParser.urlencoded({ extended: true }) middleware is used to parse the request body and make the data available in the req.body object.
3. The app.post('/login', function(req, res) { sets up a route that listens for a POST request to the '/login' endpoint.
4. The MongoClient.connect('mongodb://localhost:27017/mydb', function(err, db) { connects to a MongoDB database using the MongoClient object, it uses the default localhost and port 27017 to connect to the database "mydb"
5. The var dbo = db.db("mydb"); specifies which database in MongoDB to use, in this case it's "mydb"
6. The var query = { username: req.body.username, password: req.body.password }; creates a query object that matches the username and password fields from the request body to the corresponding fields in the MongoDB collection "users"
7. The dbo.collection("users").find(query).toArray(function(err, result) { uses the find() method to search for documents in the "users" collection that match the query.
8. The if (result.length > 0) { checks if the number of matching documents is greater than 0. If so, it sends a response with a message that says "Welcome [username]!"
9. If there is no match, the script sends a response with the message 'Invalid username or password'
10. Finally, the script starts a server on port 3000 using app.listen(3000, function() { and logs a message "Listening on port 3000" to the console.

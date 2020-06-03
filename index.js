
const express = require("express");
const bodyParser = require("body-parser")

var userRoutes =require('./routes/user.route');

var port = 3000;

var app = express();
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static('public'))

app.use('/users', userRoutes);
app.listen(port, () => {
    console.log("Server listening on port " + port);
});

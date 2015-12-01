var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var database = require('./modules/database');
var queries = require('./modules/queries');
var person = require('./modules/person');
var app = express();
var user = require('./modules/user');

//============ MIDDLEWARES =================
// Must be before routers, sometimes also order is fixed

//bodyParser urlencoded() middleware parses the json object from HTTP POST request
app.use(bodyParser.urlencoded());
app.use(function (req, res, next) {
        
    console.log(req.method);
    console.log(req.path);
    console.log(__dirname);
    console.log(req.body);
    //console.log(database.Person);
    //database.myFunction();
    //send request forward in stack
    next();
});

app.use('/', express.static(path.join(__dirname, '../FrontEnd/views')));
app.use('/FrontEnd/css', express.static(path.join(__dirname, '../FrontEnd/css')));
app.use('/FrontEnd/lib', express.static(path.join(__dirname, '../FrontEnd/lib')));
app.use('/FrontEnd/module', express.static(path.join(__dirname, '../FrontEnd/module')));

app.use('/persons', person);
app.use('/friends', user);

//============ ROUTERS======================


app.listen(3000);
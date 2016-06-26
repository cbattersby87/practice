var express = require('express');
var resturant = express();

resturant.get('/', function(req, res){
    res.send("Hello World");
});

//think of this as a set of instructions of how the app determines what 
//app will do once the request for the hot dog is requested
resturant.get('/hotdog', function(req, res){
    res.send("Fresh Hot Dog in a Bun");
});


//this adds a one in front of whatever value you enter in 
//http://localhost:3000/add?val=test
resturant.get('/add', function(req, res){
    res.send((1 + req.query.val ).toString());
});


//this stores a temporary list of items essentially showing that our app is the server
//http://localhost:3000/addrec?rec=HotDogs
var lastRec = "";
resturant.get('/addRec', function(req, res){
    lastRec = req.query.rec;
    res.send("Rec Recieved");
});


resturant.get('/showRec', function(req, res){
    res.send(lastRec);
});


//think of this as the doors opening and closing to the restaurant
//nothing will happen until the doors have opened 
resturant.listen(3000, function(){
    console.log("Server is up and running and listening to port 3000.");
});
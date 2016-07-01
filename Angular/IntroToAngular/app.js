var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'jade');

//routes us to src/views/index.jade
app.get('/', function(req, res){
    res.render('index');
});

app.get('/userdetails', function(req, res){
    res.render('userdetails');
});

//lets open the doors
app.listen(3000, function (){
    console.log("App is up and running on port 3000");
})
var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('src/views'));

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/books', function (req, res) {
    res.send('Hello Books');
});

app.listen(port, function(){
    console.log('running server on port 3000');
});
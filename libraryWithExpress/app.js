var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var bookRouter = require('./src/routes/booksRoutes');

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'jade');

//this is how our bookRouter knows to use /books
app.use('/books', bookRouter);

//this goes to our home page
app.get('/', function (req, res) {
    res.render('index', { title: 'index' });
});

//opens the doors and kicks off the app 
app.listen(port, function (err) {
    console.log('running server on port ' + port);
});
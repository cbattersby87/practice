var express = require('express');
var app = express();

var bookRouter = express.Router();

var books = [
    {
        title: 'War and Peace',
        genre: 'Historical Fiction',
        author: 'Lev Nikolayevich Tolstoy',
        read: false
    },
    {
        title: 'Les Miserables',
        genre: 'Historical Fiction',
        author: 'Victor Hugo',
        read: false
    },
    {
        title: 'Harry Potter',
        genre: 'Children Sci-Fi',
        author: 'J. K. Rowlin',
        read: true
    },
    {
        title: 'Goosebumps',
        genre: 'Children Suspense',
        author: 'R. L. Stein',
        read: true
    }
];

//this is for localhost:5000/books
bookRouter.route('/')
    .get(function(req, res){
        res.render('books', {book: ['Goosebumps'], author: ['R. L. Stein']});
    });

//this is for localhost:5000/books/single
bookRouter.route('/:id')
    .get(function(req, res){
        var id = req.params.id;
        res.render('books', {books: books[id]});
    });

module.exports = bookRouter;

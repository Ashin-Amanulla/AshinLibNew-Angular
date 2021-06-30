const express = require('express');
// const { books } = require('../json/books.json');
// const { authors } = require('../json/authors.json');
const BookData = require('../model/bookdata');
const AuthorData = require('../model/authordata');
let app = express.Router();

app.get('/books', function (req, res) {
    BookData.find()
        .then(function (book) {
            res.send(book);
        })
});

app.get('/authors', function (req, res) {
    AuthorData.find()
        .then(function (author) {
            res.send(author);

        })
});

app.get('/books/:id', function (req, res) {
    console.log("response from booksid");
    let id = req.params.id;
    BookData.findById(id)
        .then(function (book) {
            res.send(book);
        });
});

app.get('/authors/:id', function (req, res) {
    let id = req.params.id;
    AuthorData.findById(id)
        .then(function (author) {
            res.send(author)
        });
});


//deletebook

app.post('/deletebook', function (req, res) {

    let id = req.body.id;
    BookData.deleteOne({
        _id: id
    }, (err, result) => {
        if (err) {
            res.send({
                status: false,
                data: err
            });
        } else {


            console.log(req.body)
            res.send({
                status: true
            });
        }
    });
});

//deleteauthor

app.post('/deleteauthor', function (req, res) {

    let id = req.body.id;
    AuthorData.remove({
        _id: id
    }, (err, result) => {
        if (err) {
            res.send({
                status: false,
                data: err
            });
        } else {

            // console.log(req.body)
            res.send({
                status: true
            });
        }
    });
});


module.exports = app;
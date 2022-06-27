const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const Pelicula = require("../models/Movie.model");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get('/movies',(req, res, next) => {
    Pelicula.find()
    .then((response) =>{

        res.render('movies', {response})
    })
});

module.exports = router;

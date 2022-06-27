const mongoose = require("mongoose");

const esquemaPelicula = new mongoose.Schema({

    title: {
        type: String,
        unique: true
    },
    director: {
        type: String
    },
    stars:{
        type: [String]
    },
    image:{
        type: String
    },

    description:{
        type: String
    },
    showtimes:{
        type: [String]
    }
});

const Pelicula = mongoose.model("Pelicula", esquemaPelicula);

module.exports = Pelicula;
const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    azucar: {
        type: Number,
        require: true
    },
    grasa: {
        type: Number,
        require: true
    },
    oxigeno: {
        type: Number,
        require: true
    }
});

module.exports = mongoose.model("Nombre", ProductoSchema);
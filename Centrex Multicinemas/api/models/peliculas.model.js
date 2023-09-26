'use strict';

const mongoose = require('mongoose');

const schema_peliculas = new mongoose.Schema({
    fecha: { type: String, required: true, unique: false },
    nombre: { type: String, required: true, unique: false },
    categoria: { type: String, required: true, unique: false },
    ubicacion: { type: String, required: true, unique: false },
    calificacion: { type: String, required: false, unique: false },
    comentarios: { type: String, required: true, unique: false },
});

module.exports = mongoose.model('Pelicula', schema_peliculas, 'Peliculas');
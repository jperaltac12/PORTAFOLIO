'use strict';

const mongoose = require('mongoose');

const schema_usuarios = new mongoose.Schema({
    tipoUsuario: { type: String, required: true, unique: false },
    identificacion: { type: String, required: true, unique: true },
    primerNombre: { type: String, required: true, unique: false },
    segundoNombre: { type: String, required: false, unique: false },
    primerApellido: { type: String, required: true, unique: false },
    segundoApellido: { type: String, required: false, unique: false },
    correo: { type: String, required: true, unique: false },
    nacimiento: { type: String, required: true, unique: false },
    nombreUsuario: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('Usuario', schema_usuarios, 'Usuarios');
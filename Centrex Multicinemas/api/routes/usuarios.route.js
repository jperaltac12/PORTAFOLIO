'use strict';

const express = require('express');

const router = express.Router();
const Comentario = require('../models/usuarios.model');

//req --> Peticion
//res --> respuesta
//Busca todos los Usuario existentes, sin filtrar
router.get('/listar-usuarios', (req, res) => {
    Usuario.find((err, lista_usuarios) => {
        if (err) {
            res.json({
                msj: "No se pudieron mostrar los usuarios",
                err
            });
        } else {
            res.json({ lista_usuarios })
        }
    })
});

//registra un nuevo Usuario
router.post('/registrar-usuario', (req, res) => {
    let nuevo_usuario = new Usuario({
        tipoUsuario: req.body.tipoUsuario,
        identificacion: req.body.identificacion,
        primerNombre: req.body.primerNombre,
        segundoNombre: req.body.segundoNombre,
        primerApellido: req.body.primerApellido,
        segundoApellido: req.body.segundoApellido,
        correo: req.body.correo,
        nacimiento: req.body.nacimiento,
        nombreUsuario: req.body.nombreUsuario,
    });
    /*iun Usuario*/

    nuevo_usuario.save((err, usuario_db) => {
        if (err) {
            res.json({
                msj: "No se pudo registrar el usuario",
                err
            });
        } else {
            res.json({
                msj: "El usuario se registró exitosamente",
                usuario_db
            });
        }
    });
});

router.get('/buscar-usuarios-correo', (req, res) => {
    let correo = req.query.correo;
    Usuario.find({ correo: correo }, (err, lista_usuarios) => {
        if (err) {
            res.json({
                msj: "No se pudieron mostrar los usuarios",
                err
            });
        } else {
            res.json({ lista_usuarios })
        }
    })
});

module.exports = router;
'use strict';

const registrar_usuario = async(tipoUsuario, identificacion, primerNombre, segundoNombre, primerApellido, segundoApellido, correoElectronico, fechaNacimiento, nombreUsuario) => {

    await axios({
        method: "post",
        url: "http://localhost:3000/api/registrar-usuario",
        responseType: "json",
        data: {
            tipoUsuario: tipoUsuario,
            identificacion: identificacion,
            primerNombre: primerNombre,
            segundoNombre: segundoNombre,
            primerApellido: primerApellido,
            segundoApellido: segundoApellido,
            correo: correoElectronico,
            nacimiento: fechaNacimiento,
            nombreUsuario: nombreUsuario,
        }
    }).then((response) => {
        if (response.data.err) {
            Swal.fire({
                'icon': 'error',
                'title': 'Ocurrió un error inesperado',
                'text': response.data.msj
            });
        } else {
            Swal.fire({
                'icon': 'success',
                'title': 'Usuario guardado exitosamente',
                'text': response.data.msj
            }).then(() => {
                limpiar_pantalla();
            });
        }
    }).catch((response) => {
        Swal.fire({
            'icon': 'error',
            'title': 'Ocurrió un error inesperado',
            'text': "Error al llamar al servidor"
        });
    });
}

const listar_usuarios = async() => {
    let lista = [];
    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-usuarios',
        responseType: 'json'
    }).then((response) => {
        if (response.data.err) {
            Swal.fire({
                'icon': 'error',
                'title': 'Ocurrión un error inesperado',
                'text': response.data.err
            });
        } else {
            lista = response.data.lista_usuarios;
        }
    }).catch((response) => {
        Swal.fire({
            'icon': 'error',
            'title': 'Ocurrió un error inesperado',
            'text': "Error al llamar al servidor"
        });
    });

    return lista;
}
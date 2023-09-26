'use strict';

const registrar_comentario = async(nombre, telefono, correo, comentario) => {

    await axios({
        method: "post",
        url: "http://localhost:3000/api/registrar-comentario",
        responseType: "json",
        data: {
            nombre: nombre,
            telefono: telefono,
            correo: correo,
            comentario: comentario
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
                'title': 'Mensaje enviado exitosamente',
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

const listar_comentarios = async() => {
    let lista = [];
    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-comentarios',
        responseType: 'json'
    }).then((response) => {
        if (response.data.err) {
            Swal.fire({
                'icon': 'error',
                'title': 'Ocurrión un error inesperado',
                'text': response.data.err
            });
        } else {
            lista = response.data.lista_comentarios;
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
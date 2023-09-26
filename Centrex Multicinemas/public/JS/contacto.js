'use strict';

const botonEnviar = document.querySelector('#btn-enviar');
const inputNombre = document.querySelector('#txt-nombre');
const inputTelefono = document.querySelector('#txt-telefono');
const inputCorreo = document.querySelector('#txt-correo');
const inputComentario = document.querySelector('#txta-comentario');



const obtenerDatos = () => {
    let nombre = inputNombre.value;
    let telefono = inputTelefono.value;
    let correo = inputCorreo.value;
    let comentario = inputComentario.value;
    console.log('El nombre es ', nombre);
    console.log('El teléfono es: ' + telefono);
    console.log(`El correo es ${correo}.`); //Esta es la preferible porque es la más actualizada sin embargo pueden usar cualquiera. Alt+96 ó a la izquierda del 1 o a la derecha del p    
    console.log(comentario);
    registrar_comentario(nombre, telefono, correo, comentario);
    Swal.fire({
        'icon': 'success',
        'title': 'Mensaje enviado exitosamente',
        'text': 'Nos pondremos en contacto lo antes posible'
    }).then(() => {
        //ejecutese despues de haber mostrado el alerta 
        limpiar_pantalla();
    });
};

const limpiar_pantalla = () => {
    inputNombre.value = "";
    inputTelefono.value = "";
    inputCorreo.value = "";
    inputComentario.value = "";
}

const validar_vacios = () => {
    let error = false;
    let campos_requeridos = document.querySelectorAll(':required');
    campos_requeridos.forEach(campo => {
        if (campo.value == '') {
            error = true;
            campo.classList.add('error-input');
        } else {
            campo.classList.remove('error-input');
        }
    });
    return error;
}

const validar = () => {
    let error = false;
    error = validar_vacios();

    let expReg_soloLetras = /^[a-zA-Z].+$/i;
    if (!expReg_soloLetras.test(inputNombre.value)) {
        error = true;
        inputNombre.classList.add('error-input');
    } else {
        inputNombre.classList.remove('error-input');
    }

    let expReg_Telefono = new RegExp('^[0-9]{4}\-[0-9]{4}$');
    if (!expReg_Telefono.test(inputTelefono.value)) {
        error = true;
        inputTelefono.classList.add('error-input');
    } else {
        inputTelefono.classList.remove('error-input');
    }

    let expReg_Correo = new RegExp('^[a-zA-Z0-9._-]+\@{1}[a-zA-Z]+(.com|.net|.org|.ac.cr|.es)$');
    if (!expReg_Correo.test(inputCorreo.value)) {
        error = true;
        inputCorreo.classList.add('error-input');
    } else {
        inputCorreo.classList.remove('error-input');
    }

    if (error) {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo enviar su mensaje',
            "text": "Por favor revise los campos resaltados en rojo"
        });
    } else {
        obtenerDatos();
    }
}
botonEnviar.addEventListener('click', validar);
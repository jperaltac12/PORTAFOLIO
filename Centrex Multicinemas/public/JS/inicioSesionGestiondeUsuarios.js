'use strict';

const botonEnviar = document.querySelector('#btn-enviar');
const inputNombre = document.querySelector('#txt-nombre');
const inputApellidos = document.querySelector('#txt-apellidos');
const inputTelefono = document.querySelector('#txt-telefono');
const inputCorreo = document.querySelector('#txt-correo');
const inputUsuario = document.querySelector('#usuario');
const inputClave = document.querySelector('#clave');
const inputDireccion = document.querySelector('#txt-direccion');

const obtenerDatos = () => {
    let nombre = inputNombre.value;
    let apellidos = inputApellidos.value;
    let telefono = inputTelefono.value;
    let correo = inputCorreo.value;
    let usuario = inputUsuario.value;
    let clave = inputClave.value;
    let direccion = inputDireccion.value;
    console.log('El nombre es ', nombre);
    console.log('El apellido es ', apellidos);
    console.log('El teléfono es: ' + telefono);
    console.log(`El correo es ${correo}.`); //Esta es la preferible porque es la más actualizada sin embargo pueden usar cualquiera. Alt+96 ó a la izquierda del 1 o a la derecha del p    
    console.log('El usuario es: ' + usuario);
    console.log('La clave es: ' + clave);
    console.log('La direccion es: ' + direccion);
    Swal.fire({
        'icon': 'success',
        'title': 'Usuario creado exitosamente',
        'text': 'Gracias por utilizar CENTREX Multicinemas.'
    }).then(() => {
        //ejecutese despues de haber mostrado el alerta
        limpiar_pantalla();
    });
};

const limpiar_pantalla = () => {
    inputNombre.value = '';
    inputApellidos.value = '';
    inputTelefono.value = '';
    inputCorreo.value = '';
    inputUsuario.value = '';
    inputClave.value = '';
    inputDireccion.value = '';
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

    let expReg_soloLetras = /^[a-zA-Z.]+$/i;
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
            'title': 'No se pudo crear el Usuario',
            "text": "Por favor revise los campos resaltados en rojo"
        });
    } else {
        obtenerDatos();
    }
}
botonEnviar.addEventListener('click', validar);
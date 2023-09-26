'use strict';

const botonEnviar = document.querySelector('#button');
const inputUsuario = document.querySelector('#txt-usuario');
const inputClave = document.querySelector('#clave');


const obtenerDatos = () => {
    let usuario = inputUsuario.value;
    let clave = inputClave.value;
    console.log('El Usuario es ', usuario);
    console.log('La clave es: ' + clave);
    redireccionar();

};

const redireccionar = () => {
    document.location.href = ("../HTML/inicioSesionBienvenida.html");
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
    if (!expReg_soloLetras.test(inputUsuario.value)) {
        error = true;
        inputUsuario.classList.add('error-input');
    } else {
        inputUsuario.classList.remove('error-input');
    }

    let expReg_clave = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?)(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{6,}/;
    if (!expReg_clave.test(inputClave.value)) {
        error = true;
        inputClave.classList.add('error-input');
    } else {
        inputClave.classList.remove('error-input');
    }
    if (error) {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo Iniciar Sesión',
            "text": "Por favor revise que sus datos sean correctos"
        });
    } else {
        obtenerDatos();
    }
}
botonEnviar.addEventListener('click', validar);
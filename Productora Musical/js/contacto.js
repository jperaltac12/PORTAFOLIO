'use strict';

const botonEnviar = document.querySelector('#button');
const inputNombre = document.querySelector('#nombre');
const inputEmail = document.querySelector('#email');
const inputTel = document.querySelector('#telefono');


const obtenerDatos = () => {
    const inputNotificaciones = document.querySelector('input[name="notificaciones"]:checked').value;
    const inputRecom = document.querySelector('input[name="recomendacion"]:checked').value;
    const inputFreq = document.querySelector('input[name="frecuencia"]:checked').value;
    let Usuario = inputNombre.value;
    let Email = inputEmail.value;
    let Telefono = inputTel.value;
    let notificacion = inputNotificaciones;
    let Recomendacion = inputRecom;
    let Frecuencia = inputFreq;
    console.log('Nombre: ' + Usuario);
    console.log('Email: ' + Email);
    console.log('Telefono: ' + Telefono);
    console.log('Desea recibir notificaciones: ' + notificacion);
    console.log('Recomienda el producto: ' + Recomendacion);
    console.log('Frecuencia de uso del producto: ' + Frecuencia);
    Swal.fire({
        'icon': 'success',
        'title': 'Datos Enviados',
        "text": "Gracias por completar el formulario, en breve será contactado por un agente.",
        "confirmButtonText": 'Aceptar',
    });
}

const validar_vacios = () => {
    let error = false;
    let error_notificaciones = false;
    let error_recomendacion = false;
    let error_frecuencia = false;
    let error_terminos_y_condiciones = false;
    let campos_requeridos = document.querySelectorAll(':required');
    campos_requeridos.forEach(campo => {
        if (campo.value == '') {
            error = true;
            campo.classList.add('error-input');
        } else {
            campo.classList.remove('error-input');
        }
    });
    validar_notificaciones();
    validar_recomendacion();
    validar_frecuencia();
    validar_terminos_y_condiciones();
    return error;
}
const validar_notificaciones = () => {
    let error = false;
    let error_notificaciones = false;
    let input_notificaciones = document.querySelector('#notificaciones input[type=radio]:checked');
    if (!input_notificaciones) {
        error = true;
        document.querySelector('#notificaciones').classList.add('error-input');
        error_notificaciones = true;
    } else {
        document.querySelector('#notificaciones').classList.remove('error-input');
    }
    return error_notificaciones;
}
const validar_recomendacion = () => {
    let error = false;
    let error_recomendacion = false;
    let input_recomendacion = document.querySelector('#recomendacion input[type=radio]:checked');
    if (!input_recomendacion) {
        error = true;
        document.querySelector('#recomendacion').classList.add('error-input');
        error_recomendacion = true;
    } else {
        document.querySelector('#recomendacion').classList.remove('error-input');
    }
    return error_recomendacion;
}
const validar_frecuencia = () => {
    let error = false;
    let error_frecuencia = false;
    let input_frecuencia = document.querySelector('#frecuencia input[type=radio]:checked');
    if (!input_frecuencia) {
        error = true;
        document.querySelector('#frecuencia').classList.add('error-input');
        error_frecuencia = true;
    } else {
        document.querySelector('#frecuencia').classList.remove('error-input');
    }
    return error_frecuencia;
}


//VALIDACION DEL CAMPO TERMINOS Y CONDICIONES

let validar_terminos_y_condiciones = () => {
    let error = false;
    let error_terminos_y_condiciones = false;
    let input_terminos_y_condiciones = document.querySelector('#terminos_y_condiciones input[type=checkbox]:checked');
    if (!input_terminos_y_condiciones) {
        error = true;
        document.querySelector('#terminos_y_condiciones').classList.add('error-input');
        error_terminos_y_condiciones = true;
    } else {
        document.querySelector('#terminos_y_condiciones').classList.remove('error-input');
    }
    return error_terminos_y_condiciones;
}
const validar = () => {
    let error = false;
    error = validar_vacios();
    if (error) {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo enviar los datos',
            "text": "Por favor revise no hayan campos vacios o incorrectos.",
            "confirmButtonText": 'Aceptar',
        });
    } else {
        obtenerDatos();
    }
}
botonEnviar.addEventListener('click', validar);

function check() {
    document.getElementById("myCheck").checked = true;
    Swal.fire({
        icon: 'info',
        title: 'Sr. Usuario',
        text: 'Usted esta aceptando nuestras politicas de servicio',
        confirmButtonText: 'Aceptar',
    })
}

function limpiar() {
    document.getElementById('nombre').value = "";
    document.getElementById('email').value = "";
    document.getElementById('telefono').value = "";
    document.getElementById("myCheck").checked = false;
    const radioBtns2 = document.getElementsByName('notificaciones');
    radioBtns2.forEach(radioBtn => {
        if (radioBtn.checked = true)
            radioBtn.checked = false;
    });
    const radioBtns = document.getElementsByName('recomendacion');
    radioBtns.forEach(radioBtn => {
        if (radioBtn.checked = true)
            radioBtn.checked = false;
    });
    const radioBtns1 = document.getElementsByName('frecuencia');
    radioBtns1.forEach(radioBtn => {
        if (radioBtn.checked = true)
            radioBtn.checked = false;
    });
};
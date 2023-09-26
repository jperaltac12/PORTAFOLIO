'use strict';

const botonRegistrar = document.querySelector("#btn-registrar");
const input_identificacion = document.querySelector("#identificacion");
const input_primerNombre = document.querySelector("#primer-nombre");
const input_segundoNombre = document.querySelector("#segundo-nombre");
const input_primerApellido = document.querySelector("#primer-apellido");
const input_segundoApellido = document.querySelector("#segundo-apellido");
const input_correoElectronico = document.querySelector("#correo-electronico");
const input_fechaNacimiento = document.querySelector("#fecha-nacimiento");
const input_nombreUsuario = document.querySelector("#nombre-usuario");

const obtenerDatos = () => {
    const select_tipoUsuario = document.querySelector("#tipo-usuario");
    let tipoUsuario = select_tipoUsuario.value;
    let identificacion = input_identificacion.value;
    let primerNombre = input_primerNombre.value;
    let segundoNombre = input_segundoNombre.value;
    let primerApellido = input_primerApellido.value;
    let segundoApellido = input_segundoApellido.value;
    let correoElectronico = input_correoElectronico.value;
    let fechaNacimiento = input_fechaNacimiento.value;
    let nombreUsuario = input_nombreUsuario.value;

    console.log("El tipo de usuario es: " + tipoUsuario);
    console.log("El numero de identificacion es: " + identificacion);
    console.log("El primer nombre es: " + primerNombre);
    console.log("El segundo nombre es: " + segundoNombre);
    console.log("El primer apellido es: " + primerApellido);
    console.log("El segundo apellido es: " + segundoApellido);
    console.log("El correo electrónico es: " + correoElectronico);
    console.log("La fecha de nacimiento es: " + fechaNacimiento);
    console.log("El nombre de usuario es: " + nombreUsuario);
    registrar_usuario(tipoUsuario, identificacion, primerNombre, segundoNombre, primerApellido, segundoApellido, correoElectronico, fechaNacimiento, nombreUsuario);
    Swal.fire({
        icon: "success",
        title: 'Registro completado con éxito',
        text: 'El usuario se ha registrado satisfactoriamente. Gracias por preferir CENTREX Multicinemas.'
    }).then(() => {
        limpiar();
    });
};

const limpiar = () => {
    select_tipoUsuario.value = "";
    input_identificacion.value = "";
    input_primerNombre.value = "";
    input_segundoNombre.value = "";
    input_primerApellido.value = "";
    input_segundoApellido.value = "";
    input_correoElectronico.value = "";
    input_fechaNacimiento.value = "";
    input_nombreUsuario.value = "";
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

    let expReg_Identificacion = RegExp('^[0-9]{1}-[0-9]{4}-[0-9]{4}$');
    if (!expReg_Identificacion.test(input_identificacion.value)) {
        error = true;
        input_identificacion.classList.add("error-input");
    } else {
        input_identificacion.classList.remove("error-input");
    }

    let expReg_soloLetras = /^[a-z]+$/i;
    if (!expReg_soloLetras.test(input_primerNombre.value)) {
        error = true;
        input_primerNombre.classList.add("error-input");
    } else {
        input_primerNombre.classList.remove("error-input");
    }

    /*if (!expReg_soloLetras.test(input_segundoNombre.value)) {
        error = true;
        input_segundoNombre.classList.add("error-input");
    } else {
        input_segundoNombre.classList.remove("error-input");
    }*/

    if (!expReg_soloLetras.test(input_primerApellido.value)) {
        error = true;
        input_primerApellido.classList.add("error-input");
    } else {
        input_primerApellido.classList.remove("error-input");
    }

    /*if (!expReg_soloLetras.test(input_segundoApellido.value)) {
        error = true;
        input_segundoApellido.classList.add("error-input");
    } else {
        input_segundoApellido.classList.remove("error-input");
    }*/

    let expReg_Correo = new RegExp('^[a-zA-Z0-9._-]+\@{1}[a-zA-Z]+(.com|.net|.org|.ac.cr|.es)$');

    if (!expReg_Correo.test(input_correoElectronico.value)) {
        error = true;
        input_correoElectronico.classList.add("error-input");
    } else {
        input_correoElectronico.classList.remove("error-input");
    }

    if (error) {
        Swal.fire({
            icon: "warning",
            title: "No se pudo completar el registro",
            text: "Por favor verifique que haya completado todos los espacios requeridos."
        });
    } else {
        obtenerDatos()
    }

}

botonRegistrar.addEventListener('click', validar);
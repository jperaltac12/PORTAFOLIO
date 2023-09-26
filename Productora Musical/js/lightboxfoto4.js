//obtener el modal
var modal = document.getElementById("modal4");

//obtener la imagen y agregarla dentro del modal-Usar el tecto alternativo "alt" como subtitulo
var img = document.getElementById("myImg4");
var modalImg = document.getElementById("img04");
var captionText = document.getElementById("caption4");
//funcion que se ejecuta al dar click a la imagen
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

//obtenga el elemento <span> que cierra el modal
//el cero es un parametro obligatorio que se debe poner
//conexion el DOM usnado un nombre de clase
var span = document.getElementsByClassName("close4")[0];

//cuando el usuario hace click en <span> (x), cierre el modal
span.onclick = function() {
    //ocultar el modal con foto
    modal.style.display = "none";
}
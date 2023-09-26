//obtener el modal
var modal = document.getElementById("modal2");

//obtener la imagen y agregarla dentro del modal-Usar el tecto alternativo "alt" como subtitulo
var img = document.getElementById("myImg2");
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption2");
//funcion que se ejecuta al dar click a la imagen
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

//obtenga el elemento <span> que cierra el modal
//el cero es un parametro obligatorio que se debe poner
//conexion el DOM usnado un nombre de clase
var span = document.getElementsByClassName("close2")[0];

//cuando el usuario hace click en <span> (x), cierre el modal
span.onclick = function() {
    //ocultar el modal con foto
    modal.style.display = "none";
}
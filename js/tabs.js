//recibe el controlador de eventos y el ID de cada contenido
function opciones(evt, info) {

    //*declaracion de variables
    //i controla el for
    //tabcontent controla el contenido de los TABS
    //tablinks controla los enlaces de los TABS
    var i, tabcontent, tablinks;

    // Obtener todos los elementos con class = "tabcontent" y ocúltelos
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Apunta a todos los elementos con class = "tablinks" y elimine la clase "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }


    // Apunta a todos los elementos con class = "tablinks" y elimine la clase "active". 
    //Muestre la pestaña actual y agregue una clase "activa" al botón que abrió la pestaña.
    document.getElementById(info).style.display = "block";
    evt.currentTarget.className += " active";
}
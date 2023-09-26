var foto = 0;
var micarrusel = {};
var total = 0;
//arreglo para cargar las imagenes y titulo de cada foto.
micarrusel = [{ imageurl: "imagenes/1.png", titulo: "Pioneer" }, { imageurl: "imagenes/2.png", titulo: "CBM Music" }, { imageurl: "imagenes/3.png", titulo: "Multimedia SA" },
    { imageurl: "imagenes/4.png", titulo: "LG" }, { imageurl: "imagenes/5.png", titulo: "Sony" }
];


//funcion que permite cambiar las imagenes (anterior y siguiente)
var cambiar = function(mas) {
    //almacena la cantidad total de imagenes
    total = micarrusel.length;
    foto = foto + mas;
    //condicionales para determinar la imagen a presentar
    if (foto > total) {
        foto = 1
    }
    if (foto < 1) {
        foto = total;
    }
    //instrucciones que apuntan a cada imagen y titulo
    document.thumb.src = micarrusel[foto - 1].imageurl;
    titulo = document.getElementById('titulo');
    titulo.innerText = micarrusel[foto - 1].titulo;
}
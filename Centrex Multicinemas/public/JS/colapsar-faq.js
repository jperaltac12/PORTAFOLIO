'use strict';

function vermas(id) {
    if (id == "mas-a") {
        document.getElementById("desplegar-a").style.display = "block";
        document.getElementById("mas-a").style.display = "none";
    } else {
        document.getElementById("desplegar-a").style.display = "none";
        document.getElementById("mas-a").style.display = "inline";
    }

    if (id == "mas-b") {
        document.getElementById("desplegar-b").style.display = "block";
        document.getElementById("mas-b").style.display = "none";
    } else {
        document.getElementById("desplegar-b").style.display = "none";
        document.getElementById("mas-b").style.display = "inline";
    }

    if (id == "mas-c") {
        document.getElementById("desplegar-c").style.display = "block";
        document.getElementById("mas-c").style.display = "none";
    } else {
        document.getElementById("desplegar-c").style.display = "none";
        document.getElementById("mas-c").style.display = "inline";
    }

    if (id == "mas-d") {
        document.getElementById("desplegar-d").style.display = "block";
        document.getElementById("mas-d").style.display = "none";
    } else {
        document.getElementById("desplegar-d").style.display = "none";
        document.getElementById("mas-d").style.display = "inline";
    }
}
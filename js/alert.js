let alert = document.getElementById("alert");
window.addEventListener("load", function () {
    setTimeout(a, 2500);
});

function a (){
    alert.classList.remove("hide");
    alert.classList.add("animate");
};
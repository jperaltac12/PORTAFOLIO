
/*PRELOADER*/
let loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.classList.add("hidden");
  setTimeout(a, 1500);
});

function a() {
  loader.style.display = "none";
}





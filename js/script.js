// Script pour le menu :
document.querySelector("header>svg").addEventListener("click", menu);
function menu() {
    document.querySelector(".wrapper").classList.toggle("visible");
    document.querySelector("header").classList.toggle("taille")
}

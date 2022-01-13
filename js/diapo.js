let compteur = 0; // Compteur qui permettra de savoir sur quelle slide nous sommes
let timer, elements, slides, slideWidth;

document.querySelector(".rondd.gauchee").addEventListener("click", imggauch);
function imggauch(){
    var images = document.querySelectorAll(".diapo>img");
    document.querySelector(".imgdiapo").style.transform= "translate(-55vw)";
}
document.querySelector(".rondd.droitee").addEventListener("click", imgdroite);
function imgdroite(){
    var images = document.querySelectorAll(".diapo>img");
    document.querySelector(".imgdiapo").style.transform= "translate(+55vw)";
}
window.onload = () => {
    var diapo = document.querySelector(".diapo");
    elements = document.querySelector(".imgdiapo");
    slides = document.querySelectorAll(".imgdiapo>img");
    slideWidth = diapo.getBoundingClientRect().width;
    document.querySelector(".rondd.droitee").addEventListener("click", slideNext);;
    document.querySelector(".rondd.gauchee").addEventListener("click", slidePrev);
    timer = setInterval(slideNext, 4000);
    diapo.addEventListener("mouseover", stopTimer);
    diapo.addEventListener("mouseout", startTimer);
    window.addEventListener("resize", () => {
        slideWidth = diapo.getBoundingClientRect().width;
        slideNext();
    })
}
function slideNext(){
    compteur++;
    if(compteur == slides.length){
        compteur = 0;
    }
    let decal = -slideWidth * compteur;
    elements.style.transform = `translateX(${decal}px)`;
}
function slidePrev(){
    compteur--;
    if(compteur < 0){
        compteur = slides.length - 1;
    }
    let decal = -slideWidth * compteur;
    elements.style.transform = `translateX(${decal}px)`;
}
function stopTimer(){
    clearInterval(timer);
}
function startTimer(){
    timer = setInterval(slideNext, 4000);
}
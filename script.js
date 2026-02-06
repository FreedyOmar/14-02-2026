const carrusel = document.getElementById("carrusel");
const items = document.querySelectorAll(".item");
const tarjetas = document.querySelectorAll(".tarjeta");

/* 🔥 RADIO RESPONSIVE REAL */
let radio;

if(window.innerWidth < 600){
    radio = window.innerWidth * 0.35;
}else{
    radio = 280;
}

const total = items.length;
const angulo = 360 / total;

/* Posicionar círculo */
items.forEach((item, i) => {
    item.style.transform =
        `rotateY(${angulo*i}deg) translateZ(${radio}px)`;
});

/* Giro carrusel */
let rotacion = 0;
let arrastrando = false;
let inicioX = 0;

carrusel.addEventListener("mousedown", e=>{
    arrastrando = true;
    inicioX = e.clientX;
});

window.addEventListener("mouseup", ()=>{
    arrastrando = false;
});

window.addEventListener("mousemove", e=>{
    if(!arrastrando) return;

    let mover = e.clientX - inicioX;
    inicioX = e.clientX;

    rotacion += mover * 0.3;

    carrusel.style.transform =
        `rotateY(${rotacion}deg)`;
});

/* Touch */
carrusel.addEventListener("touchstart", e=>{
    arrastrando = true;
    inicioX = e.touches[0].clientX;
});

window.addEventListener("touchend", ()=>{
    arrastrando = false;
});

window.addEventListener("touchmove", e=>{
    if(!arrastrando) return;

    let mover = e.touches[0].clientX - inicioX;
    inicioX = e.touches[0].clientX;

    rotacion += mover * 0.4;

    carrusel.style.transform =
        `rotateY(${rotacion}deg)`;
});

/* Flip individual */
tarjetas.forEach(t=>{
    t.addEventListener("click", e=>{
        e.stopPropagation();
        t.classList.toggle("voltear");
    });
});

/* 🌸 PETALOS */
const contenedorPetalos = document.querySelector(".petalos");

for(let i=0;i<35;i++){

    let petalo = document.createElement("span");

    petalo.style.left = Math.random()*100 + "vw";
    petalo.style.animationDuration = (8 + Math.random()*8) + "s";
    petalo.style.animationDelay = Math.random()*5 + "s";

    let size = 0.7 + Math.random()*0.8;
    petalo.style.transform = "scale(" + size + ")";

    contenedorPetalos.appendChild(petalo);
}

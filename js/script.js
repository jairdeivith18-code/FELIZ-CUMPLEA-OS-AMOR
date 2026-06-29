const boton = document.getElementById("btnComenzar");

boton.addEventListener("click", ()=>{

document.getElementById("historia").scrollIntoView({

behavior:"smooth"

});

});


// CORAZONES

const contenedor=document.querySelector(".corazones");

function crearCorazon(){

const corazon=document.createElement("div");

corazon.classList.add("corazon");

corazon.innerHTML="❤";

corazon.style.left=Math.random()*100+"vw";

corazon.style.animationDuration=(4+Math.random()*4)+"s";

corazon.style.fontSize=(15+Math.random()*20)+"px";

contenedor.appendChild(corazon);

setTimeout(()=>{

corazon.remove();

},8000);

}

setInterval(crearCorazon,350);

// ===============================
// ANIMACIÓN AL HACER SCROLL
// ===============================

const historia = document.querySelector(".contenido");

window.addEventListener("scroll",()=>{

const posicion = historia.getBoundingClientRect().top;

const pantalla = window.innerHeight;

if(posicion < pantalla - 150){

historia.classList.add("mostrar");

}

});
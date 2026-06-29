window.addEventListener("load",()=>{

const overlay=document.querySelector(".overlay");

overlay.style.opacity="0";
overlay.style.transform="translateY(50px)";

setTimeout(()=>{

overlay.style.transition="1.5s";

overlay.style.opacity="1";

overlay.style.transform="translateY(0px)";

},300);

});

document.getElementById("btnComenzar").addEventListener("click",()=>{

document.getElementById("historia").scrollIntoView({

behavior:"smooth"

});

});
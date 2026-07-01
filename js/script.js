// ===============================
// BOTÓN "COMENZAR NUESTRA HISTORIA"
// ===============================

const btnComenzar = document.getElementById("btnComenzar");

btnComenzar.addEventListener("click", () => {

    document.getElementById("historia").scrollIntoView({

        behavior: "smooth"

    });

});


// ===============================
// TRANSICIÓN CINEMATOGRÁFICA
// ===============================

const frases = document.querySelectorAll(".frase");
const boton = document.getElementById("continuar");
const transicion = document.getElementById("transicion");

let indice = 0;
let inicioAnimacion = false;

function mostrarFrase() {

    frases[indice].classList.remove("activa");

    indice++;

    if (indice < frases.length) {

        frases[indice].classList.add("activa");

        // Cada frase tiene un tiempo diferente
        let tiempo = 4000;

        if(indice == 1) tiempo = 3000;
        if(indice == 2) tiempo = 5000;
        if(indice == 3) tiempo = 6500;

        setTimeout(mostrarFrase, tiempo);

    }else{

        boton.style.display = "inline-block";

    }

}

const observador = new IntersectionObserver((entradas)=>{

    entradas.forEach((entrada)=>{

        if(entrada.isIntersecting && !inicioAnimacion){

            inicioAnimacion = true;

            setTimeout(mostrarFrase,4000);

        }

    });

},{
    threshold:0.60
});

observador.observe(transicion);


// ===============================
// BOTÓN CONTINUAR
// ===============================

boton.addEventListener("click", () => {

    const recuerdos = document.getElementById("recuerdos");

    if (recuerdos) {

        recuerdos.scrollIntoView({

            behavior: "smooth"

        });

    }

});

// ===============================
// SOBRE Y CARTA
// ===============================

const sobre = document.querySelector(".sobre");

const contenidoCarta = document.getElementById("contenidoCarta");

if(sobre){

    sobre.addEventListener("click", ()=>{

    const musica = document.getElementById("musica");

console.log("Audio encontrado:", musica);

if (musica) {

    musica.volume = 0.35;

    musica.play()
        .then(() => {
            console.log("✅ La música empezó a sonar");
        })
        .catch((error) => {
            console.error("❌ Error al reproducir:", error);
        });

}   
        sobre.classList.add("abierto");

        setTimeout(()=>{

            document.getElementById("carta").style.display = "block";

            document.getElementById("carta").scrollIntoView({

                behavior: "smooth"

            });

            escribirCarta();

        },1200);

    });

}

// ===============================
// ESCRIBIR CARTA
// ===============================

const textoCarta = `Querida Angie...

Hay personas que aparecen en nuestra vida de la forma más inesperada.

El año pasado te vi entrando a un taller en la empresa.

Fue solo un instante.

Jamás imaginé que meses después volvería a encontrarte.

Y mucho menos que llegarías a convertirte en una de las personas más especiales para mí.

Lo primero que llamó mi atención fueron tus ojos.

Pero lo que terminó conquistando mi corazón fue la persona que descubrí detrás de ellos.

Tu alegría.

Tu forma de reír.

Tu manera de hacer sentir bien a quienes te rodean.

Tu ternura.

Y esa paz tan bonita que transmites simplemente siendo tú.

Poco a poco empezamos a compartir conversaciones, canciones, anécdotas y momentos que hoy guardo con muchísimo cariño.

Descubrí que no eran los lugares los que hacían especiales esos recuerdos...

Eras tú.

Por eso decidí hacer este regalo.

No para impresionarte.

Sino para regalarte algo diferente.

Algo que pudiera recordarte lo especial que eres.

Tal vez nunca imaginaste todo lo que significó conocerte.

Pero hoy quería que lo supieras.

No sé qué cosas nos esperan más adelante.

Lo único que sí sé...

es que, sea mucho o sea poco lo que tenga para ofrecer,

siempre intentaré darte lo mejor de mí.

Porque me gusta verte feliz.

Y porque la paz que me das es uno de los regalos más bonitos que la vida me ha dado.

Quiero seguir construyendo muchos recuerdos bonitos a tu lado.

Más conversaciones.

Más canciones.

Más aventuras.

Más sonrisas.

Y muchos momentos que algún día podamos recordar con la misma felicidad con la que hoy los vivimos.

Nunca dejes de ser esa chica alegre.

Nunca dejes de sonreír.

Nunca dejes de brillar.

Porque esa esencia fue justamente la que hizo que quisiera conocerte más.

Feliz cumpleaños, Angie.

Gracias por existir.

Con muchísimo cariño...

Dei ❤️`;

let indiceCarta = 0;

function escribirCarta(){

    if(indiceCarta < textoCarta.length){

        contenidoCarta.innerHTML += textoCarta.charAt(indiceCarta);

        indiceCarta++;

        setTimeout(escribirCarta,35);

    }

}

// =====================================
// ÚLTIMO CAPÍTULO
// =====================================

const frasesFinales = document.querySelectorAll(".final-frase");
const firmaFinal = document.getElementById("firmaFinal");

let indiceFinal = 0;

function mostrarFinal(){

    frasesFinales[indiceFinal].classList.remove("activa");

    indiceFinal++;

    if(indiceFinal < frasesFinales.length){

        frasesFinales[indiceFinal].classList.add("activa");

        setTimeout(mostrarFinal,3500);

    }else{

        firmaFinal.style.display="block";

    }

}

const observadorFinal = new IntersectionObserver((entradas)=>{

    entradas.forEach((entrada)=>{

        if(entrada.isIntersecting){

            setTimeout(mostrarFinal,3500);

            observadorFinal.disconnect();

        }

    });

},{
    threshold:0.60
});

observadorFinal.observe(document.getElementById("ultimoCapitulo"));
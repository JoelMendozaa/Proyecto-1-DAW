



/* CARTELES */
var cartel = parseInt(prompt("Escriba el número del carteles que busca por favor"));

if (cartel == null || cartel <= 0){        // Si el numero escrito por teclado es nulo o menor o igual a 0, lanza alerta
    alert("Debes introducir una cantidad mayor de 0");
} else{
    for (let i  = 0; i < cartel; i++){          // Sino, muestra las imagenes de los cartes tantas veces se haya escrito por teclado
        document.write(`<div class="display">`);
        document.write(`<img src = "images/WORTEN.png">`);
        document.write(`</div>`);
    }
}


/* NUMEROS Y PUERTAS */

var numPuertas = parseInt(prompt ("Escribe el numero de puerta"));
document.write(`<div class = "display">`);
numPuertas +=2;
document.write(`</div>`)

var puertas = parseInt(prompt("Di el numero de puertas que habrá"))



/* ESCAPARATES Y OFERTAS */
var ofertas = parseInt(prompt("Escribe que descuento quieres"));
print(ofertas);

var escaparates = parseInt ("Cuantos escaparates hay");
for (let i  = 0; escaparates > 0; i++){
    if (escaparates == null){
        alert("Debes introducir una cantidad mayor de 0");
    } else {
       img.src = "images/Tienda.png"
    }
}





/* SEMAFOROS Y RELOJ */



/* COCHES */











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
if (puertas == null || puertas <= 0){        // Si el numero escrito por teclado es nulo o menor o igual a 0, lanza alerta
    alert("Debes introducir una cantidad mayor de 0");
} else{
    for (let i  = 0; i < puertas; i++){          // Sino, muestra las imagenes de los puertas tantas veces se haya escrito por teclado
        document.write(`<div class="display">`);
        document.write(`<img src = "images/Puerta.png">`);
        document.write(`</div>`);
    }
}


/* ESCAPARATES Y OFERTAS */


var escaparates = parseInt(prompt("Cuantos escaparates hay"));
if (escaparates == null || escaparates <= 0){        // Si el numero escrito por teclado es nulo o menor o igual a 0, lanza alerta
    alert("Debes introducir una cantidad mayor de 0");
} else{
    for (let i  = 0; i < escaparates; i++){          // Sino, muestra las imagenes de los escaparates/tiendas tantas veces se haya escrito por teclado
        document.write(`<div class="display">`);
        document.write(`<img src = "images/Tienda.png">`);
        document.write(`</div>`);
    }
}

var ofertas = parseInt(prompt("Escribe que descuento quieres"));
print(ofertas);



/* SEMAFOROS Y RELOJ */



/* COCHES */








/* CARTELES */
var cartel = parseInt(prompt("Escriba el número del carteles que busca por favor"));

if (cartel == null || cartel <= 0){        // Si el numero escrito por teclado es nulo o menor o igual a 0, lanza alerta
    alert("Debes introducir una cantidad mayor de 0");
} else{
    document.write(`<div class="images">`);
    for (let i  = 0; i < cartel; i++){          // Sino, muestra las imagenes de los cartes tantas veces se haya escrito por teclado
        document.write(`<img src = "images/WORTEN.png">`);
    }
    document.write(`</div>`);
}


/* NUMEROS Y PUERTAS */

var numPuertas = parseInt(prompt ("Escribe el numero de puerta por el que se inicia"));     // A través de un prompt, se pide un numero entero

if (numPuertas == null ||numPuertas <= 0){      // Si el numero introducido es menor o igual a 0 o en su defecto, no se ha colocado ninguno, saldrá una alerta
    alert("Debes colocar un número válido");
} else {
    var puertas = parseInt (prompt("Di el número de puertas que habrá"));       // A través de un prompt, se pide un numero entero
}

if (puertas == null || puertas <= 0){        // Si el numero escrito por teclado es nulo o menor o igual a 0, lanza alerta
    alert("Debes introducir una cantidad mayor de 0");
} else{
    document.write(`<div class = "images">`);
    for (let i = 0; i < puertas; i++){          // Por cada puerta que aparece según el numero introducido
        document.write(`<div>`);
        document.write(`<h4>${numPuertas}</h4>`);       // Aparecen el numero de las puertas
        document.write(`<img src = "images/Puerta.png">`);
        document.write(`</div>`);

        numPuertas += 2;        // Sin importar el número que sea, se le sumará +2 para que este aumente según la puerta
    }

    document.write(`</div>`);
}

/* ESCAPARATES Y OFERTAS */

var ofertas = parseInt(prompt("Escribe que descuento quieres"));
if (ofertas == null || ofertas <= 0){
    alert ("Por favor, coloca un número para saber el descuento deseado")
} else {
    var escaparates = parseInt(prompt("Cuantos escaparates hay"));
}
if (escaparates == null || escaparates <= 0){  
    alert("Debes introducir una cantidad mayor de 0");
} else{
    document.write(`<div class = "images">`);
    for (let i = 0; i < escaparates; i++){          // Por cada puerta que aparece según el numero introducido
        document.write(`<div>`);
        document.write(`<h4>${ofertas}</h4>`);       // Aparecen el numero de las puertas
        document.write(`<img src = "images/Tienda.png">`);
        document.write(`</div>`);
    }
    document.write(`</div>`);
}


/* SEMAFOROS Y RELOJ */

var hora = parseInt(prompt("¿Qué hora es?"))
if (hora == null || hora <= 0 || hora > 24){       // Si la hora esrita es menor o igual que 0 o es superior a 24 o no se pone, lanza alerta
    alert("Esa hora no existe");
} else {
    switch (hora){
        case 1:
        case 13:
        break;

        case 2:
        case 14:
        break;

        case 3:
        case 15:
        break;

        case 4: 
        case 16: 
        break;

        case 5: 
        case 17:
        break;

        case 6:
        case 18:
        break;

        case 7:
        case 19:
        break;

        case 8:
        case 20: 
        break;

        case 9:
        case 21: 
        break;

        case 10:
        case 22: 
        break;

        case 11:
        case 23:
        break;

        case 12:
        case 24:
        break;

    }
}

/* COCHES */





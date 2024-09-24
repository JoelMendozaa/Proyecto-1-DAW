
/* CARTELES */
var cartel = parseInt(prompt("Escriba el número del carteles que busca por favor"));

while (cartel <= 0){    // Mientras cartel sea menor o igual a 0
    alert("Debes introducir una cantidad mayor de 0");      // Alerta 
    cartel = parseInt(prompt("Escriba el número del carteles que busca por favor"));     // Vuelve a  lanzar la pregunta todas las veces en las que el numero introducido no sea el correcto
}
if (cartel > 0) {
    document.write(`<div class="images">`);
    for (let i  = 0; i < cartel; i++){          // Sino, muestra las imagenes de los cartes tantas veces se haya escrito por teclado
        document.write(`<img src = "images/WORTEN.png">`);
        console.log ("Mostrando" + cartel)
    }
    document.write(`</div>`);
}


/* NUMEROS Y PUERTAS */
var numPuertas = parseInt(prompt ("Escribe el numero de puerta por el que se inicia"));     // A través de un prompt, se pide un numero entero

while (numPuertas <= 0){
    alert("Debes colocar un número válido");
    numPuertas = parseInt(prompt ("Escribe el numero de puerta por el que se inicia"));
}
if (numPuertas > 0) {
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

        numPuertas += 2;        // Sin importar el número que sea, se le sumará +2 para que este aumente según la puerta para que siempre sea par o impar
    }

    document.write(`</div>`);
}

/* ESCAPARATES Y OFERTAS */
var ofertas = prompt("Escribe que descuento quieres");

while(ofertas <= 0 || ofertas >= 100){      // Mientras ofertas sea menor o igual a 0 o mayor o igual a 100
    alert ("Por favor, coloca un número para saber el descuento deseado que no sea 0 ni 100");      // Lanza alerta
    ofertas = prompt("Escribe que descuento quieres");      // Realiza la pregunta
}
if (ofertas > 0) {
    var escaparates = parseInt(prompt("Cuantos escaparates hay"));
}
while (escaparates <= 0){
    alert("Debes introducir una cantidad mayor de 0");
    escaparates = parseInt(prompt("Cuantos escaparates hay"));
} 
if (escaparates > 0){
    document.write(`<div class = "images">`);
    for (let i = 0; i < escaparates; i++){          // Por cada puerta que aparece según el numero introducido
        document.write(`<div>`);
        document.write(`<h4>${ofertas} %</h4>`);       // Aparecen el numero de las puertas
        document.write(`<img src = "images/Tienda.png">`);
        document.write(`</div>`);
    }
    document.write(`</div>`);
}


/* SEMAFOROS Y RELOJ */
document.write(`<div class="images">`);
var hora = parseInt(prompt("¿Qué hora es?"));
while (hora <= 0 || hora > 24){
    alert("Esa hora no existe");
    hora = parseInt(prompt("¿Qué hora es?"));
}
 
if (hora > 0 || hora <= 24) {
    switch (hora){         // Dependiendo del numero escrito entre 1 y 24, aparecerá una imagen distinta
        case 1:
        case 13:
            document.write(`<img src="images/Reloj1.jpg">`);     // En este caso, si el numero introducido es 1 o 13 aparecerá el reloj de las 1
            console.log ("Cambio de estado" + hora)
        break;
        case 2:
        case 14:
            document.write(`<img src="images/Reloj2.jpg">`);
            console.log ("Cambio de estado" + hora)
        break;
        case 3:
        case 15:
            document.write(`<img src="images/Reloj3.jpg">`);
            console.log ("Cambio de estado" + hora)
        break;
        case 4: 
        case 16:
            document.write(`<img src="images/Reloj4.jpg">`);
            console.log ("Cambio de estado" + hora)
        break;
        case 5: 
        case 17:
            document.write(`<img src="images/Reloj5.jpg">`);
            console.log ("Cambio de estado" + hora)
        break;
        case 6:
        case 18:
            document.write(`<img src="images/Reloj6.jpg">`);
            console.log ("Cambio de estado" + hora)
        break;
        case 7:
        case 19:
            document.write(`<img src="images/Reloj7.jpg">`);
            console.log ("Cambio de estado" + hora)
        break;
        case 8:
        case 20:
            document.write(`<img src="images/Reloj8.jpg">`);
            console.log ("Cambio de estado" + hora)
        break;
        case 9:
        case 21:
            document.write(`<img src="images/Reloj9.jpg">`);
            console.log ("Cambio de estado" + hora)
        break;
        case 10:
        case 22:
            document.write(`<img src="images/Reloj10.jpg">`);
            console.log ("Cambio de estado" + hora)
        break;
        case 11:
        case 23:
            document.write(`<img src="images/Reloj11.jpg">`);
            console.log ("Cambio de estado" + hora)
        break;
        case 12:
        case 24:
            document.write(`<img src="images/Reloj12.jpg">`);
            console.log ("Cambio de estado" + hora)
        break;

    }
}

var estado = false;
while (!estado){    // Mientras sea difierente el estado
    var semaforo = prompt("¿De qué color está ahora el semáforo?");
    if (semaforo == "verde" || semaforo == "Verde"){
        document.write(`<img src="images/semaforoVerde.png">`);
        estado = true;
        console.log ("Cambio de estado" + semaforo);       // Se notifica por terminal el cambio de estado
    } else if (semaforo == "rojo" || semaforo == "Rojo"){
        document.write(`<img src="images/semaforoRojo.png">`);
        estado = true;
        console.log ("Cambio de estado" + semaforo);
    }else if (semaforo == "naranja" || semaforo == "Naranja" || semaforo == "amarillo" || semaforo == "Amarillo"){
        document.write(`<img src="images/semaforoNaranja.png">`);
        estado = true;
        console.log ("Cambio de estado" + semaforo);
    } else {
        alert ("Ese color no existe");
    }
}
document.write(`</div>`);


/* COCHES */
document.write(`<div class="images">`);
var coche = parseInt(prompt("¿Cuantos coches hay?"));   // Este prompt solo acepta numeros enteros

while (coche <= 0){
    alert("Siempre hay coches")
    coche = parseInt(prompt("¿Cuantos coches hay?"));
}
if (coche > 0) {
    for (let i  = 0; i < coche; i++){          // Sino, muestra las imagenes de los coches tantas veces se haya escrito por teclado
        document.write(`<img src = "images/Coche.png">`);
        console.log ("Mostrando" + coche)
    }
}
document.write(`</div>`)
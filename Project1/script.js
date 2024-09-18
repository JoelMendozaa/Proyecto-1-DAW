var cartel = prompt("Escriba el número del carteles que busca por favor");
var message;

if (cartel <= 0 ){
    message = "El numero no puede ser igual o menor de 0";
} else if(cartel %= 1){
    message = "No puede ser decimales";
} else {
    message = "Creado";
}

var messageBox = document.getElementById('message');
messageBox.innerHTML= message;
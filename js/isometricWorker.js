// Solo me ejecuto cuando alguien me envia algo
var temporizador;
var message;
var isoX = 0;
var isoY = 0;
self.onmessage = function (e) {
    // Cojo la información que se me esta enviando
    message = e.data;
    var x = message[0];
    var y = message[1];
    //Ahora tengo que calcular la posición de la celda
    var posInX = 600 - 40 * (x + 1);
    var posInY = 16 * (y + 1);
    // Calculo de proyecciones
    isoX = (posInX / 2 - posInY / 2);
    isoY = (posInX / 4 + posInY / 4);
    // Le devuelvo al programa principal
    self.postMessage([isoX, isoY]);
}
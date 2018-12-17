// Solo me ejecuto cuando alguien me envia algo
var temporizador;
var message;
var isoX = 0;
var isoY = 0;
self.onmessage = function (e) {
    // Cojo la información que se me esta enviando
    message = e.data;
    var x = e.data.x;
    var y = e.data.y;
    var mapX = e.data.mapX;
    //Ahora tengo que calcular la posición de la celda
    var posInX = x;
    var posInY = y;

    // Calculo de proyecciones
    isoX = (posInX / 2 - posInY / 2);
    isoY = (posInX / 2 + posInY / 2);
    isoX = (isoX * e.data.tileWidth) + mapX - (e.data.width / 2);
    isoY = (isoY * e.data.tileHeight) + (e.data.tileHeight / 2) - e.data.height;
    // Le devuelvo al programa principal
    self.postMessage([isoX, isoY]);
}
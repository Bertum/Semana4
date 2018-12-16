// Solo me ejecuto cuando alguien me envia algo
var temporizador;
var message;
var isoX = 0;
var isoY = 0;
self.onmessage = function (e) {
    // Cojo la información que se me esta enviando
    message = e.data;
    var x = e.data.posX;
    var y = e.data.posY;
    // Calculo de proyecciones
    isoX = (x / 2 - y / 2);
    isoY = (x / 4 + y / 4);
    // Le devuelvo al programa principal
    self.postMessage({ posX: isoX, posY: isoY });
}
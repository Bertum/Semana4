function Npc(x, y) {
    this.x = x;
    this.y = y;
    this.width;
    this.height;

    this.dialogs;
    this.dialogsRandom;

    this.img;

    var direction = enumDirection.RIGHT;
}

this.interact = function () {
    this.talk();
}

this.talk = function () {

    //TODO Aqui recojo el texto a pintar

    //TODO Lammar a la funcion que pinta el texto por pantalla

}


this.draw = function () {


    //TODO calcular posicion isometrica con el worker;
    worker_Position.postMessage({ posX: this.x, posY: this.y });

    self.onmessage = function (e) {
        //TODO Pasarle la posicion al drawImage
        INTERACTIVE_CTX.drawImage(this.img, e.data.posX, e.data.posY);
    }

}



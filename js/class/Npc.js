function Npc(x, y) {
    this.x = x;
    this.y = y;
    this.width;
    this.height;

    this.dialogs;
    this.dialogsRandom;

    this.img;
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


    INTERACTIVE_CTX.drawImage(this.img, 0, 0);
}



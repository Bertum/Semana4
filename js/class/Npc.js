function Npc(x, y) {
    this.x = x;
    this.y = y;
    this.width;
    this.height;

    this.dialogs;
    this.dialogsRandom;

    this.img;

    var direction = enumDirection.RIGHT;


    this.interact = function () {

    }

    this.talk = function () {

        //TODO Aqui recojo el texto a pintar
        DATA_BASE.loadDialog(1);


    }


    this.draw = function () {

        //TODO calcular posicion isometrica con el worker;
        worker_Position.postMessage({ posX: this.x, posY: this.y });

        self.onmessage = function (e) {
            //TODO Pasarle la posicion al drawImage
            INTERACTIVE_CTX.drawImage(this.img, e.data.posX, e.data.posY);
        }

    }
}





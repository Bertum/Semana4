Mujer.prototype = Object.create(Npc.prototype);
function Mujer(x, y) {
    Npc.call(this, x, y);


    this.images = new Array();

    //TODO cambiar sprites a las posiciones que tocan
    this.images[0] = new Image();
    this.images[0].src = "img/womanSprites/medusa1.png"
    this.images[1] = new Image();
    this.images[1].src = "img/womanSprites/medusa2.png"
    this.images[2] = new Image();
    this.images[2].src = "img/womanSprites/medusa3.png"
    this.images[3] = new Image();
    this.images[3].src = "img/womanSprites/medusa4.png"

    this.img = this.images[0];

    this.interact = function () {

        switch (character.lastNextMove) {
            case enumDirection.LEFT:
                this.img = this.images[1];
                break;
            case enumDirection.UP:
                this.img = this.images[3];
                break;
            case enumDirection.RIGHT:
                this.img = this.images[0];
                break;

            default:
                break;
        }
        this.talk();
    }

    this.draw = function () {
        var valores = calcIsoProyection(this.x, this.y, this.img);
        if (CURRENT_SCENE == 1) {
            game_InteractiveObjects[7][6] = this;
            INTERACTIVE_CTX.drawImage(this.img, valores.proyX, valores.proyY);
        } else if (CURRENT_SCENE > 1) {
            game_InteractiveObjects[7][6] = undefined;
        }
    }
}
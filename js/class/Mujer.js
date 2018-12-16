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



    this.draw = function () {
        this.img = this.images[this.direction];
        Npc.draw();
    }

}
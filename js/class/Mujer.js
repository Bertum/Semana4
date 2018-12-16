Mujer.prototype = Object.create(Npc.prototype);
function Mujer(x, y) {
    Npc.call(this, x, y);

    this.img = new Image();
    this.img.src = "img/womanSprites/medusa1.png"

}
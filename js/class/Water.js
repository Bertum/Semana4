Water.prototype = Object.create(Resources.prototype);
function Water(number) {
    Resources.call(this, number);
    this.img = new Image();
    this.img.src = "img/materials/water.png";
}
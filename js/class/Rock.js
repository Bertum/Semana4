Rock.prototype = Object.create(Resources.prototype);
function Rock(number) {
    Resources.call(this, number);
    this.img = new Image();
    this.img.src = "img/materials/stone.png";
}
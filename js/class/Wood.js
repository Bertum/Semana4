Wood.prototype = Object.create(Resources.prototype);
function Wood(number) {
    Resources.call(this, number);
    this.img = new Image();
    this.img.src = "img/materials/plank.png";
}
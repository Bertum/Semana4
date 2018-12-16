Earth.prototype = Object.create(Resources.prototype);
function Earth(number) {
    Resources.call(this, number);
    this.img = new Image();
    this.img.src = "img/materials/dirt_bag.png";
}
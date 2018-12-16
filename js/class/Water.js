Water.prototype = Object.create(Resources.prototype);
function Water(number) {
    Resources.call(number);
    this.img = new Image();
    this.img.src = "img/water.png";
}
Rock.prototype = Object.create(Resources.prototype);
function Rock(number) {
    Resources.call(number);
    this.img = new Image();
    this.img.src = "img/stone.png";
}
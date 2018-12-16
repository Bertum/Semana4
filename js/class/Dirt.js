Rock.prototype = Object.create(Resources.prototype);
function Dirt(number) {
    Resources.call(number);
    this.img = new Image();
    this.img.src = "img/dirt_bag.png";
}
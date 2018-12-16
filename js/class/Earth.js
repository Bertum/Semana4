Earth.prototype = Object.create(Resources.prototype);
function Earth(number) {
    Resources.call(number);
    this.img = new Image();
    this.img.src = "";
}
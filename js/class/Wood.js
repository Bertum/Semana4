Wood.prototype = Object.create(Resources.prototype);
function Wood(number) {
    Resources.call(number);
    this.img = new Image();
    this.img.src = "";
}
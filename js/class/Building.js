function Building(type, x, y) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.img = new Image();

    switch (type) {
        case 0:
            this.img.src = "img/pool.png"
            break;

        default:
            break;
    }


    this.draw = function () {
        if (CURRENT_SCENE == 1) {
            var valores = calcIsoProyection(this.x, this.y, this.img)
            BACKGROUND_CTX.drawImage(this.img, valores.proyX, valores.proyY);
        }
    }
}
function Scene() {
    this.height = SCREEN_HEIGHT;
    this.width = (SCREEN_HEIGHT * 1.923)
    this.tileWidth = this.width / 16;
    this.tileHeight = this.height / 16;
    var imgHome = new Image();
    imgHome.src = "img/map02.png";
    var imgForest = new Image();
    imgForest.src = "img/map10.png";

    this.draw = function () {
        switch (CURRENT_SCENE) {
            case 1:
                BACKGROUND_CTX.drawImage(imgHome, 0, 0, this.width, this.height);
                break;
            case 2:
                BACKGROUND_CTX.drawImage(imgForest, 0, 0, this.width, this.height);
                break;
            default:
                BACKGROUND_CTX.drawImage(imgHome, 0, 0, this.width, this.height);
                break;
        }
    }
}
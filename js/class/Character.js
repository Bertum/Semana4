function Character(id, x, y) {
    this.id = id;
    this.sprite = new Image();
    this.spriteFrontLeft = new Image();
    this.spriteFrontLeft.src = "img/playerSprites/knightFront1.png";
    this.spriteFrontRight = new Image();
    this.spriteFrontRight.src = "img/playerSprites/knightFront2.png";
    this.spriteBackRight = new Image();
    this.spriteBackRight.src = "img/playerSprites/knightBack1.png";
    this.spriteBackLeft = new Image();
    this.spriteBackLeft.src = "img/playerSprites/knightBack2.png";
    this.x = x;
    this.y = y;
    this.width = this.sprite.width;
    this.height = this.sprite.height;
    this.advanceX = 0;
    this.advanceY = 0;
    this.animationIndex = 0;
    this.test1 = 1;
    this.test2 = 1;

    this.draw = function () {
        this.x += this.advanceX;
        this.y += this.advanceY;
        //var projectionX = (this.x / 2 - this.y / 2);
        //var projectionY = (this.x / 4 + this.y / 4);
        worker_Position.postMessage([this.x, this.y]);
        worker_Position.onmessage = function (e) {
            //console.log("Char dice que: " + character.x, character.y);
            //console.log("Pero worker dice que: " + e.data[0], e.data[1]);
            character.test1 = e.data[0];
            character.test2 = e.data[1];
            //INTERACTIVE_CTX.drawImage(character.sprite, character.animationIndex * 63, 0, 63, 110, e.data[0], e.data[1], 63, 101);
        }
        INTERACTIVE_CTX.drawImage(this.sprite, this.animationIndex * 63, 0, 63, 110, this.test1, this.test2, 63, 101);
    }

    this.update = function () {
        this.move();
        this.draw();
    }

    /**Uso character en vez de this por que no funciona */
    this.move = function () {

    }

    this.setPosition = function (x, y) {
        this.x = x;
        this.y = y;
    }
}

function Character(id, x, y) {
    this.id = id;
    this.sprite = new Image();
    this.sprite.src = "img/playerSprites/knightFront2.png";
    this.spriteLeft = new Image();
    this.spriteLeft.src = "img/playerSprites/knightFront1.png";
    this.spriteDown = new Image();
    this.spriteDown.src = "img/playerSprites/knightFront2.png";
    this.spriteRight = new Image();
    this.spriteRight.src = "img/playerSprites/knightBack1.png";
    this.spriteUp = new Image();
    this.spriteUp.src = "img/playerSprites/knightBack2.png";
    this.x = x;
    this.y = y;
    this.width = 58;
    this.height = 98;
    this.nextMove;
    this.animationIndex = 0;
    this.test1 = 1;
    this.test2 = 1;

    this.draw = function () {
        switch (this.nextMove) {
            case enumDirection.UP:
                this.x = this.x > 0 ? this.x - 1 : this.x;
                break;
            case enumDirection.RIGHT:
                this.y = this.y > 0 ? this.y - 1 : this.y;
                break;
            case enumDirection.DOWN:
                this.x = this.x < 15 ? this.x + 1 : this.x;
                break;
            case enumDirection.LEFT:
                this.y = this.y < 15 ? this.y + 1 : this.y;
                break;
            default:
                break;
        }
        //var projectionX = (this.x / 2 - this.y / 2);
        //var projectionY = (this.x / 4 + this.y / 4);
        // worker_Position.postMessage([this.x, this.y]);
        worker_Position.postMessage({ "x": this.x, "y": this.y, "width": this.width, "height": this.height, "mapX": SCENE.width / 2, "mapY": 0, "tileWidth": SCENE.tileWidth, "tileHeight": SCENE.tileHeight });
        worker_Position.onmessage = function (e) {
            console.log("Char dice que: " + character.x, character.y);
            console.log("Pero worker dice que: " + e.data[0], e.data[1]);
            character.test1 = e.data[0];
            character.test2 = e.data[1];
            //INTERACTIVE_CTX.drawImage(character.sprite, character.animationIndex * 63, 0, 63, 110, e.data[0], e.data[1], 63, 101);
        }
        INTERACTIVE_CTX.drawImage(this.sprite, this.animationIndex * 63, 0, 63, 110, this.test1, this.test2, 63, 101);
    }

    this.update = function () {
        this.draw();
    }

    this.setPosition = function (x, y) {
        this.x = x;
        this.y = y;
    }
}

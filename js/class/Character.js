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
    this.proyX = 1;
    this.proyY = 1;
    this.textEnable = false;

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
        this.nextMove = undefined;
        worker_Position.postMessage({ "x": this.x, "y": this.y, "width": this.width, "height": this.height, "mapX": SCENE.width / 2, "mapY": 0, "tileWidth": SCENE.tileWidth, "tileHeight": SCENE.tileHeight });
        worker_Position.onmessage = function (e) {
<<<<<<< HEAD
            // console.log("Char dice que: " + character.x, character.y);
            // console.log("Pero worker dice que: " + e.data[0], e.data[1]);
=======
            //console.log("Char dice que: " + character.x, character.y);
            //console.log("Pero worker dice que: " + e.data[0], e.data[1]);
>>>>>>> 3f4a0a93f16073c6a0d4f3502e8a4667dd45d983
            character.proyX = e.data[0];
            character.proyY = e.data[1];
        }
        // this.animationIndex++;
        // if (this.animationIndex == 11) {
        //     this.animationIndex = 0;
        // }
        PLAYER_CTX.drawImage(this.sprite, this.animationIndex * 63, 0, 63, 110, this.proyX, this.proyY, 63, 101);
    }

    this.update = function () {
        this.draw();
    }

    this.setPosition = function (x, y) {
        this.x = x;
        this.y = y;
    }
}

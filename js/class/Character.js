function Character(id, x, y, speed) {
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
    this.speed = speed;

    this.draw = function () {
        this.x += this.advanceX * this.speed;
        this.y += this.advanceY * this.speed;
        var projectionX = (this.x / 2 - this.y / 2);
        var projectionY = (this.x / 4 + this.y / 4);
        worker_Position.postMessage([this.x, this.y]);
        worker_Position.onmessage = function (e) {
            projectionX = e.data[0];
            projectionY = e.data[1];
        }
        INTERACTIVE_CTX.drawImage(this.sprite, this.animationIndex * 63, 0, 63, 110, projectionX, projectionY, 63, 101);
    }

    this.update = function () {
        this.move();
        this.draw();
    }

    /**Uso character en vez de this por que no funciona */
    this.move = function () {
        $(document).ready(function () {
            $(document).keypress(function (event) {
                if (event.key == "w") { character.advanceX = 1; character.sprite = character.spriteFrontRight; }
                if (event.key == "s") { character.advanceX = -1; character.sprite = character.spriteBackLeft; }
                if (event.key == "a") { character.advanceY = 1; character.sprite = character.spriteFrontLeft; }
                if (event.key == "d") { character.advanceY = -1; character.sprite = character.spriteBackRight; }
                if (event.key == "e") { }

                character.animationIndex++;
                if (character.animationIndex == 11) {
                    character.animationIndex = 0;
                }
            });
            $(document).keyup(function (event) {
                if (event.key == "w") { character.advanceX = 0; }
                // A or D
                if (event.key == "a") { character.advanceY = 0; }
                // S
                if (event.key == "s") { character.advanceX = 0; }
                //D
                if (event.key == "d") { character.advanceY = 0; }
                character.animationIndex = 0;
            });
        });
    }

    this.setPosition = function (x, y) {
        this.x = x;
        this.y = y;
    }
}

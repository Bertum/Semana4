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
    this.lastNextMove = 0;
    this.animationIndex = 0;
    this.proyX = 1;
    this.proyY = 1;
    this.textEnable = false;


    this.draw = function () {

        this.nextMove = undefined;
        worker_Position.postMessage({ "x": this.x, "y": this.y, "width": this.width, "height": this.height, "mapX": SCENE.width / 2, "mapY": 0, "tileWidth": SCENE.tileWidth, "tileHeight": SCENE.tileHeight });
        worker_Position.onmessage = function (e) {
            // console.log("Char dice que: " + character.x, character.y);
            // console.log("Pero worker dice que: " + e.data[0], e.data[1]);
            character.proyX = e.data[0];
            character.proyY = e.data[1];
        }
        // this.animationIndex++;
        // if (this.animationIndex == 11) {
        //     this.animationIndex = 0;
        // }
        INTERACTIVE_CTX.drawImage(this.sprite, this.animationIndex * 63, 0, 63, 110, this.proyX, this.proyY, 63, 101);
    }

    this.update = function () {
        if (this.textEnable == false) {
            switch (this.nextMove) {
                case enumDirection.UP:
                    if (this.x > 0 && game_InteractiveObjects[this.x - 1][this.y] == undefined) {
                        this.x -= 1;
                        this.checkTeleportUp();
                    }
                    break;
                case enumDirection.RIGHT:
                    if (this.y > 0 && game_InteractiveObjects[this.x][this.y - 1] == undefined) {
                        this.y -= 1;
                        this.checkTeleportRight();
                    }
                    break;
                case enumDirection.DOWN:
                    if (this.x < 15 && game_InteractiveObjects[this.x + 1][this.y] == undefined) {
                        this.x += 1;
                        this.checkTeleportDown();
                    }
                    break;
                case enumDirection.LEFT:
                    if (this.y < 15 && game_InteractiveObjects[this.x][this.y + 1] == undefined) {
                        this.y += 1;
                        this.checkTeleportLeft();
                    }
                    break;
                default:
                    break;
            }
        }
        this.draw();
    }

    this.interact = function () {
        var objX = null;
        var objY = null;
        switch (this.lastNextMove) {
            case enumDirection.UP:
                if (this.x > 0) {
                    objX = this.x - 1;
                    objY = this.y;
                }
                break;
            case enumDirection.RIGHT:
                if (this.y > 0) {
                    objX = this.x;
                    objY = this.y - 1;
                }
                break;
            case enumDirection.DOWN:
                if (this.x < 15) {
                    objX = this.x + 1;
                    objY = this.y;
                }

                break;
            case enumDirection.LEFT:
                if (this.y < 15) {
                    objX = this.x;
                    objY = this.y + 1;
                }
                break;
            default:
                break;
        }
        if (objX != null) {
            if (game_InteractiveObjects[objX][objY] != undefined) {
                game_InteractiveObjects[objX][objY].interact();
            }
        }

    }


    // this.setPosition = function (x, y) {
    //     this.x = x;
    //     this.y = y;
    // }

    this.checkTeleportLeft = function () {
        if (this.y + 1 > 15 && (this.x == 4 || this.x == 5 || this.x == 6) && CURRENT_SCENE == 1) {
            CURRENT_SCENE = 2;
            DATA_BASE.loadScene();
            this.y = 0;
            this.x += 2;
        }
    }

    this.checkTeleportRight = function () {
        if (this.y - 1 < 0 && (this.x == 10 || this.x == 11 || this.x == 12) && CURRENT_SCENE == 1) {
            CURRENT_SCENE = 2;
            DATA_BASE.loadScene();
        } else if (this.y - 1 < 0 && (this.x == 6 || this.x == 7 || this.x == 8) && CURRENT_SCENE == 2) {
            CURRENT_SCENE = 1;
            DATA_BASE.loadScene();
            this.y = 15;
            this.x -= 2;
        }
    }

    this.checkTeleportUp = function () {
        if (this.x - 1 < 0 && (this.y == 7 || this.y == 8 || this.y == 9) && CURRENT_SCENE == 1) {
            CURRENT_SCENE = 2;
            DATA_BASE.loadScene();
        }
    }

    this.checkTeleportDown = function () {
        if (this.x + 1 > 15 && (this.y == 7 || this.y == 8 || this.y == 9) && CURRENT_SCENE == 1) {
            CURRENT_SCENE = 2;
            DATA_BASE.loadScene();
        }
    }

}//END

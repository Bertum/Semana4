function Item(id, x, y, type, scene, wasted) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.type = type;
    this.scene = scene;
    this.wasted = wasted;
    this.life = 5;
    this.width;
    this.height;
    this.sprite = new Image();
    this.wastedSprite;

    //Cargamos la imagen dependiendo de el tipo 
    switch (this.type) {
        case 1:
            this.sprite.src = "img/resources/tree.png";
            break;
        case 2:
            this.sprite.src = "img/resources/rock3.png";
            break;
        case 3:
            this.sprite = null;
            break;
        default:
            break;
    }

    this.interact = function () {
        console.log("TYPE: " + this.type)
        if (!this.wasted) {

            switch (this.type) {
                case 2:
                    this.life--;
                    AUDIO_MANAGER.playMiningSound();
                    INVENTORY.rock.quantity++;
                    break;
                case 3:
                    //this.life--;
                    AUDIO_MANAGER.playWaterSound();
                    INVENTORY.water.quantity++;
                    break;
                case 1:
                    this.life--;
                    AUDIO_MANAGER.playWoodSound();
                    INVENTORY.wood.quantity++;
                    break;

                case 4:
                    console.log("entra")
                    DATA_BASE.loadDialog(2);
                    break;
            }
            DATA_BASE.updateInventory();
            if (this.life == 0) {
                this.remove();
            }
        }
    }


    this.draw = function () {
        if (!this.wasted && this.sprite != null) {
            //console.log("Pintamos x:" + this.x + " - y:" + this.y);
            // var proyX;
            // var proyY;
            // var auxSprite = this.sprite;
            // worker_Position.postMessage({ "x": this.x, "y": this.y, "width": this.sprite.width, "height": this.sprite.height, "mapX": SCENE.width / 2, "mapY": 0, "tileWidth": SCENE.tileWidth, "tileHeight": SCENE.tileHeight });
            // worker_Position.onmessage = function (e) {
            //     proyX = e.data[0];
            //     proyY = e.data[1];
            //     INTERACTIVE_CTX.drawImage(auxSprite, proyX, proyY);
            // }
            // var isoX = (this.x / 2 - this.y / 2);
            // var isoY = (this.x / 2 + this.y / 2);
            // isoX = (isoX * SCENE.tileWidth) + SCENE.width / 2 - (this.sprite.width / 2);
            // isoY = (isoY * SCENE.tileHeight) + (SCENE.tileHeight / 2) - this.sprite.height;
            var proy = calcIsoProyection(this.x, this.y, this.sprite);
            INTERACTIVE_CTX.drawImage(this.sprite, proy.proyX, proy.proyY);
        }
    }

    this.setPosition = function (x, y) {
        this.x = x;
        this.y = y;
    }

    this.remove = function () {
        this.wasted = true;
        DATA_BASE.updateInteractive(this.id)
    }
}
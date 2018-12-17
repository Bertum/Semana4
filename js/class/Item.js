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
    this.proxX;
    this.proyY;

    //Cargamos la imagen dependiendo de el tipo 
    switch (this.type) {
        case 1:
            this.sprite.src = "img/resources/tree.png";
            var me = this;
            this.sprite.addEventListener("load", function () {
                //Once image loads do something
                me.width = me.sprite.width;
                me.height = me.sprite.height;
                me.draw();
            });
            break;
        case 2:
            this.sprite.src = "img/resources/rock3.png";
            var me = this;
            this.sprite.addEventListener("load", function () {
                //Once image loads do something
                me.width = me.sprite.width;
                me.height = me.sprite.height;
                me.draw();
            });
            break;
        case 3:
            this.sprite = null;
            break;
        case 4:
            this.sprite = null;
            break;
        default:
            break;
    }

    this.interact = function () {
        if (!this.wasted) {
            this.life--;
            switch (this.itemType) {
                case ItemTypes.Mineral:
                    AUDIO_MANAGER.playMiningSound();
                    INVENTORY.rock.quantity++;
                    break;
                case ItemTypes.Water:
                    AUDIO_MANAGER.playWaterSound();
                    INVENTORY.water.quantity++;
                    break;
                case ItemTypes.Wood:
                    AUDIO_MANAGER.playWoodSound();
                    INVENTORY.wood.quantity++;
                    break;
            }
            if (this.life == 0) {
                this.remove();
            }
            //TODO Peticion de actu de base de datos
        }
    }


    this.draw = function () {
        if (!this.wasted && this.sprite != null) {
            //console.log("Pintamos x:" + this.x + " - y:" + this.y);
            var me = this;
            worker_Position.postMessage({ "x": this.x, "y": this.y, "width": this.width, "height": this.height, "mapX": SCENE.width / 2, "mapY": 0, "tileWidth": SCENE.tileWidth, "tileHeight": SCENE.tileHeight });
            worker_Position.onmessage = function (e) {
                me.proxX = e.data[0];
                me.proyY = e.data[1];
                INTERACTIVE_CTX.drawImage(me.sprite, me.proxX, me.proyY);
            }
        } else {
            // if (wastedSprite != null) {
            //     INTERACTIVE_CTX.drawImage(this.wastedSprite, this.x, this.y);
            // }
        }
    }

    this.setPosition = function (x, y) {
        this.x = x;
        this.y = y;
    }

    this.remove = function () {
        this.wasted = true;

        //TODO Hacer peticion a la BD para ponerlo en wasted
    }
}
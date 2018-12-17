function Item(id, x, y, type, scene, wasted) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.type = type;
    this.scene = scene;
    this.wasted = wasted;
    this.life = 5;

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
        case 4:
            this.sprite = null;
            break;
        default:
            break;
    }

    this.pickUp = function () {
        if (!this.wasted) {
            this.life--;
            switch (this.itemType) {
                case ItemTypes.Mineral: AUDIO_MANAGER.playMiningSound();
                    break;
                case ItemTypes.Water: AUDIO_MANAGER.playWaterSound();
                    break;
                case ItemTypes.Wood: AUDIO_MANAGER.playWoodSound();
                    break;
            }
            if (this.life == 0) {
                this.remove();
            }
        }
    }


    this.draw = function () {
        if (!this.wasted && this.sprite != null) {
            //console.log("Pintamos x:" + this.x + " - y:" + this.y);
            INTERACTIVE_CTX.drawImage(this.sprite, this.x, this.y);
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
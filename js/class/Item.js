function Item(id, sprite, wastedSprite, x, y, itemType, scene, wasted, life) {
    this.id = id;
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.itemType = itemType;
    this.scene = scene;
    this.wasted = wasted;
    this.life = life;
    this.wastedSprite = wastedSprite;

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
                this.wasted = true;
                return this;
            }
        }
    }

    this.draw = function () {
        if (!wasted) {
            INTERACTIVE_CTX.drawImage(this.sprite, this.x, this.y);
        } else {
            if (wastedSprite != null) {
                INTERACTIVE_CTX.drawImage(this.wastedSprite, this.x, this.y);
            }
        }
    }
}
function DialogManager() {
    this.text = null; // Array de string
    this.currentText = "";
    this.currentIndex = 0;
    this.sprite = new Image();
    this.sprite.src = "img/dialog.png";
    this.enable = false;
    this.x = 0;
    this.y = SCREEN_HEIGHT - 250;
    this.fontSize = "50px Arial";
    this.draw = function () {
        if (this.enable) {
            DIALOGS_CTX.drawImage(this.sprite, this.x, this.y);
            // DIALOGS_CTX.fillText(this.currentText, this.x, this.y + 50);
            DIALOGS_CTX.font = this.fontSize;
            DIALOGS_CTX.fillText(this.currentText, this.x + 50, this.y + 100);
        }
    }

    this.showText = function (text) {
        if (this.text == null) {
            character.textEnable = true;
            this.text = new Array();
            this.text = text;
            this.currentText = this.text[this.currentIndex].dialog;
            this.enable = true;
        } else {
            this.checkNextText();
        }
    }

    this.update = function () {
        this.draw();
    }

    // this.hide = function () {
    //     clearTimeout(coolDown);
    //     this.enable = false;
    // }

    this.checkNextText = function () {
        this.currentIndex++;
        if (this.currentIndex < this.text.length) {
            this.currentText = this.text[this.currentIndex].dialog;
        } else {
            if (this.text.length > 1 && game_momentum != 1) {
                DATA_BASE.momentumIncrement();
            }

            this.text = null;
            this.currentIndex = 0;
            this.enable = false;
            character.textEnable = false;
        }
    }
}
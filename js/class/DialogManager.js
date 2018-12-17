function DialogManager() {
    this.text = new Array(); // Array de string
    this.currentText = "";
    this.currentIndex = 0;
    this.sprite = new Image();
    this.sprite.src = "img/dialog.png";
    this.enable = false;
    this.x = 0;
    this.y = SCREEN_HEIGHT - 250;
    this.fontSize = "20px Arial";
    this.draw = function () {
        if (this.enable) {
            DIALOGS_CTX.drawImage(this.sprite, this.x, this.y);
            // DIALOGS_CTX.fillText(this.currentText, this.x, this.y + 50);
            DIALOGS_CTX.font = this.fontSize;
            DIALOGS_CTX.fillText(this.currentText, this.x + 50, this.y + 100);
        }
    }

    this.showText = function (text) {
        character.textEnable = true;
        this.text = text;
        this.currentText = this.text[this.currentIndex];
        this.enable = true;
    }

    this.update = function () {
        this.draw();
    }

    this.checkNextText = function () {
        this.currentIndex++;
        var nextText = this.text[this.currentIndex]
        if (nextText != null) {
            this.currentText = nextText;
        } else {
            this.currentIndex = 0;
            this.enable = false;
            character.textEnable = false;
        }
    }
}
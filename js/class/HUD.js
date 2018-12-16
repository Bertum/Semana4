function HUD() {

    this.update = function () {
        if (INVENTORY != undefined) {
            this.draw();
        }
    }

    this.draw = function () {
        HUD_CTX.font = "36px Unlock";
        HUD_CTX.fillStyle = "#ffa600";
        HUD_CTX.strokeStyle = 'black';

        var img = INVENTORY.wood.img;
        HUD_CTX.drawImage(img, 25, 25, 75, 75);
        HUD_CTX.fillText("X" + INVENTORY.wood.quantity, 105, 90);
        HUD_CTX.strokeText("X" + INVENTORY.wood.quantity, 105, 90);

        img = INVENTORY.rock.img;
        HUD_CTX.drawImage(img, 200, 25, 75, 75);
        HUD_CTX.fillText("X" + INVENTORY.rock.quantity, 280, 90);
        HUD_CTX.strokeText("X" + INVENTORY.rock.quantity, 280, 90);

        img = INVENTORY.water.img;
        HUD_CTX.drawImage(img, 375, 25, 75, 75);
        HUD_CTX.fillText("X" + INVENTORY.water.quantity, 455, 90);
        HUD_CTX.strokeText("X" + INVENTORY.water.quantity, 455, 90);

        img = INVENTORY.earth.img;
        HUD_CTX.drawImage(img, 550, 25, 75, 75);
        HUD_CTX.fillText("X" + INVENTORY.earth.quantity, 630, 90);
        HUD_CTX.strokeText("X" + INVENTORY.earth.quantity, 630, 90);
    }
}
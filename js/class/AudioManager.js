function AudioManager() {
    this.waterSound = new Audio("audio/water.wav");
    this.woodSound = new Audio("audio/wood.wav");
    this.miningSound = new Audio("audio/mining.wav");
    this.winSound = new Audio("audio/win.wav");

    this.playWaterSound = function () {
        this.waterSound.play();
    }

    this.playWoodSound = function () {
        this.woodSound.play();
    }

    this.playMiningSound = function () {
        this.miningSound.play();
    }

    this.playWinSound = function () {
        this.winSound.play();
    }
}
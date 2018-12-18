function AudioManager() {
    this.music = new Audio("audio/gameMusic.mp3");
    this.waterSound = new Audio("audio/water.wav");
    this.woodSound = new Audio("audio/wood.wav");
    this.miningSound = new Audio("audio/mining.wav");
    this.winSound = new Audio("audio/win.wav");

    this.playMusic = function () {
        this.music.addEventListener("ended", function () {
            this.currentTime = 0;
            this.play();
        }, false);
        this.music.play();
    }

    this.playWaterSound = function () {
        this.waterSound.pause();
        this.waterSound.currentTime = 0.0;
        this.waterSound.play();
    }

    this.playWoodSound = function () {
        this.woodSound.pause();
        this.woodSound.currentTime = 0.0;
        this.woodSound.play();
    }

    this.playMiningSound = function () {
        this.miningSound.pause();
        this.miningSound.currentTime = 0.0;
        this.miningSound.play();
    }

    this.playWinSound = function () {
        this.winSound.pause();
        this.winSound.currentTime = 0.0;
        this.winSound.play();
    }
}
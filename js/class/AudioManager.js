function AudioManager() {
    this.music = new Audio("audio/gameMusic.mp3");
    this.waterSound = new Audio("audio/water.wav");
    this.woodSound = new Audio("audio/wood.wav");
    this.miningSound = new Audio("audio/mining.wav");
    this.winSound = new Audio("audio/win.wav");

    this.playMusic = function () {
        this.music.addEventListener("ended", function() {
			this.currentTime = 0;
			this.play();
        }, false);
		this.music.play();
    }

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
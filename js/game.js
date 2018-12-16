$(document).ready(function () {
    SCREEN_HEIGHT = window.innerHeight;
    SCREEN_WIDTH = window.innerWidth;
    initMenuHandler();
    init();
});

function init() {
    initDB();
    initAudio();
    initCanvas();
    character = new Character(1, 1, 1, 50);
    gameCoolDown = setTimeout("gameLoop()", 1000);
}

function gameLoop() {
    BACKGROUND_CTX.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    INTERACTIVE_CTX.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    HUD_CTX.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    DIALOGS_CTX.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

    //Dibujar hud
    paintHud();
<<<<<<< HEAD

=======
    character.update();
>>>>>>> 46fa7c9f1dd90f07c5cdf13f438b63ee7e2d9441
    //Dibujar bocadillo de texto
    paintBubble();

    clearTimeout(gameCoolDown);
    gameCoolDown = setTimeout("gameLoop()", 33);
}
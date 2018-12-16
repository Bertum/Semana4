$(document).ready(function () {
    SCREEN_HEIGHT = window.innerHeight;
    SCREEN_WIDTH = window.innerWidth;
    initMenuHandler();
    initKeyHandler();
    initDB();
    init();
});

function init() {
    initAudio();
    initCanvas();
    initScene();
    HUD = new HUD();
    character = new Character(1, 1, 1);
    gameCoolDown = setTimeout("gameLoop()", 1000);
}

function gameLoop() {
    BACKGROUND_CTX.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    INTERACTIVE_CTX.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    DIALOGS_CTX.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    //Dibujar mapa
    SCENE.draw();
    //Actualiza y pinta el hud;
    HUD.update();

    character.update();
    //Dibujar bocadillo de texto
    paintBubble();

    clearTimeout(gameCoolDown);
    gameCoolDown = setTimeout("gameLoop()", 33);
}
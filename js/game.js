$(document).ready(function () {
    SCREEN_HEIGHT = window.innerHeight;
    SCREEN_WIDTH = window.innerWidth;
    initMenuHandler();
    initDB();
    init();
});

function init() {
    initAudio();
    initCanvas();
    HUD = new HUD();
    dialogManager = new DialogManager();
    var arrayText = new Array();
    //Prueba, esto se debe eliminar y cambiar con los textos correctos
    arrayText.push("hola");
    arrayText.push("hola2");
    arrayText.push("hola3");
    dialogManager.showText(arrayText);
    character = new Character(1, 0, 0);
    gameCoolDown = setTimeout("gameLoop()", 1000);
}

function gameLoop() {
    BACKGROUND_CTX.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    INTERACTIVE_CTX.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    DIALOGS_CTX.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    //Dibujar mapa
    paintMap();
    //Actualiza y pinta el hud;
    HUD.update();
    //Actualiza el dialog manager
    dialogManager.update();
    character.update();

    clearTimeout(gameCoolDown);
    gameCoolDown = setTimeout("gameLoop()", 33);
}
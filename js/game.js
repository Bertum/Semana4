$(document).ready(function () {
    SCREEN_HEIGHT = window.innerHeight;
    SCREEN_WIDTH = window.innerWidth;
    //Creacion de el array de el mapa que contiene los interactivos
    game_InteractiveObjects = create2DArray(16);
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
    character = new Character(1, 0, 0);
    dialogManager = new DialogManager();
    var arrayText = new Array();
    //Prueba, esto se debe eliminar y cambiar con los textos correctos
    arrayText.push("hola");
    arrayText.push("hola2");
    arrayText.push("hola3");
    dialogManager.showText(arrayText);
    gameCoolDown = setTimeout("gameLoop()", 1000);
}

function gameLoop() {
    BACKGROUND_CTX.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    PLAYER_CTX.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    HUD_CTX.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    DIALOGS_CTX.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    //Dibujar mapa
    SCENE.draw();
    //Actualiza y pinta el hud;
    HUD.update();
    //Actualiza el dialog manager
    dialogManager.update();
    //drawInteractiveObjects(INTERACTIVE_RESULTS);
    character.update();

    clearTimeout(gameCoolDown);
    gameCoolDown = setTimeout("gameLoop()", 33);
}
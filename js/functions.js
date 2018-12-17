$(document).keypress(function (event) {
    if (event.key == "w") { character.advanceX = -1; character.sprite = character.spriteFrontRight; }
    if (event.key == "s") { character.advanceX = 1; character.sprite = character.spriteBackLeft; }
    if (event.key == "a") { character.advanceY = -1; character.sprite = character.spriteFrontLeft; }
    if (event.key == "d") { character.advanceY = 1; character.sprite = character.spriteBackRight; }
    if (event.key == "e") { dialogManager.checkNextText(); }

    character.animationIndex++;
    if (character.animationIndex == 11) {
        character.animationIndex = 0;
    }
});
$(document).keyup(function (event) {
    if (event.key == "w") { character.advanceX = 0; }
    // A or D
    if (event.key == "a") { character.advanceY = 0; }
    // S
    if (event.key == "s") { character.advanceX = 0; }
    //D
    if (event.key == "d") { character.advanceY = 0; }
    character.animationIndex = 0;
});

function paintMap() {
    //Deberíamos saber en qué mapa estamos
    switch (CURRENT_SCENE) {
        case 1:
            BACKGROUND_CTX.drawImage(imgHome, 0, 0);
            break;
        case 2:
            BACKGROUND_CTX.drawImage(imgForest, 0, 0);
            break;
        default:
            BACKGROUND_CTX.drawImage(imgHome, 0, 0);
            break;
    }

}

/**
 * Inicializa el audio del juego.
 */
function initAudio() {
    AUDIO_MANAGER = new AudioManager();
}
/**
 * Inicializa el contralador de los botones del menú.
 */
function initMenuHandler() {
    $("#menuPlay").click(function () {
        $("#menuScreen").fadeOut("slow");
        DATA_BASE.resetDataBase();
        DATA_BASE.loadInventory();
        //AUDIO_MANAGER.playMusic();
    });
    $("#menuContinue").click(function () {
        $("#menuScreen").fadeOut("slow");
        DATA_BASE.loadInventory();
        //AUDIO_MANAGER.playMusic();
    });
    $("#menuHowToPlay").click(function () {
        $("#menuHowToPlay").find("p").toggle(500);
    });
    $("#menuCredits").click(function () {
        $("#menuCredits").find("p").toggle(500);
    });
}
/**
 * Inicializa los canvas del juego.
 */
function initCanvas() {
    $("#backgroundCanvas").attr("width", SCREEN_WIDTH);
    $("#backgroundCanvas").attr("height", SCREEN_HEIGHT);
    BACKGROUND_CTX = document.getElementById("backgroundCanvas").getContext("2d");     //Canvas para el fondo
    $("#interactiveCanvas").attr("width", SCREEN_WIDTH);
    $("#interactiveCanvas").attr("height", SCREEN_HEIGHT);
    INTERACTIVE_CTX = document.getElementById("interactiveCanvas").getContext("2d");   //Canvas para NPCs, Player and interactive objects
    $("#hudCanvas").attr("width", SCREEN_WIDTH);
    $("#hudCanvas").attr("height", SCREEN_HEIGHT);
    HUD_CTX = document.getElementById("hudCanvas").getContext("2d");                   //Canvas para el hud
    $("#dialogsCanvas").attr("width", SCREEN_WIDTH);
    $("#dialogsCanvas").attr("height", SCREEN_HEIGHT);
    DIALOGS_CTX = document.getElementById("dialogsCanvas").getContext("2d");           //Canvas para los dialogos
}

/**
 * Inicializa la base de datos de la aplicación
 */
function initDB() {
    DATA_BASE = new DataBase();
    DATA_BASE.createDataBase();
}
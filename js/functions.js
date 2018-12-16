function paintHud() {

    HUD_CTX.font = "30px Arial";

    HUD_CTX.drawImage(imgHudCemento, 20, 0, 125, 75);
    HUD_CTX.fillText("x 0", 150, 50);

    HUD_CTX.drawImage(imgHudMadera, 220, 0, 125, 75);
    HUD_CTX.fillText("x 0", 350, 50);

    HUD_CTX.drawImage(imgHudLadrillos, 420, 0, 125, 75);
    HUD_CTX.fillText("x 0", 550, 50);

    HUD_CTX.drawImage(imgHudTela, 620, 0, 125, 75);
    HUD_CTX.fillText("x 0", 750, 50);

    HUD_CTX.drawImage(imgHudTacha, 820, 0, 125, 75);
    HUD_CTX.fillText("x 0", 950, 50);
}

function paintBubble() {
    // hola
    //bocadillo
    // comentario prueba.
    DIALOGS_CTX.drawImage(imgBocadillo, 0, 625);
    DIALOGS_CTX.font = "30px Arial";
    DIALOGS_CTX.fillText("- O me construyes una buena piscina o voy a mojarme con el vecino, y te recuerdo que el tampoco tiene piscina", 50, 725)
    //Aqui deberiamos meter un boton continuar si sigue habiendo mas texto

}

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
        AUDIO_MANAGER.playMusic();
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
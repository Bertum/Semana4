function paintBubble() {
    // hola
    //bocadillo
    // comentario prueba.
    // DIALOGS_CTX.drawImage(imgBocadillo, 0, 625);
    // DIALOGS_CTX.font = "30px Arial";
    // DIALOGS_CTX.fillText("- O me construyes una buena piscina o voy a mojarme con el vecino, y te recuerdo que el tampoco tiene piscina", 50, 725)
    // //Aqui deberiamos meter un boton continuar si sigue habiendo mas texto

}

/**
 * Inicializa el control del jugador
 */
function initKeyHandler() {
    $(document).keydown(function (event) {
        if (event.key == "w") { character.nextMove = enumDirection.UP; character.sprite = character.spriteUp; }
        if (event.key == "s") { character.nextMove = enumDirection.DOWN; character.sprite = character.spriteDown; }
        if (event.key == "a") { character.nextMove = enumDirection.LEFT; character.sprite = character.spriteLeft; }
        if (event.key == "d") { character.nextMove = enumDirection.RIGHT; character.sprite = character.spriteRight; }
        if (event.key == "e") { }

        // character.animationIndex++;
        // if (character.animationIndex == 11) {
        //     character.animationIndex = 0;
        // }
    });
}

/**
 * Inicializa el audio del juego.
 */
function initScene() {
    SCENE = new Scene();
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
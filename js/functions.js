function paintHud() {
    
    contextHud.font = "30px Arial";

    contextHud.drawImage(imgHudCemento, 20, 0, 125, 75);
    contextHud.fillText("x 0", 150, 50);

    contextHud.drawImage(imgHudMadera, 220, 0, 125, 75);
    contextHud.fillText("x 0", 350, 50);

    contextHud.drawImage(imgHudLadrillos, 420, 0, 125, 75);
    contextHud.fillText("x 0", 550, 50);

    contextHud.drawImage(imgHudTela, 620, 0, 125, 75);
    contextHud.fillText("x 0", 750, 50);

    contextHud.drawImage(imgHudTacha, 820, 0, 125, 75);
    contextHud.fillText("x 0", 950, 50);
}

function paintBubble(){
    //bocadillo
    contextBubblesNpc.drawImage(imgBocadillo,0,625);
    contextBubblesNpc.font = "30px Arial";
    contextBubblesNpc.fillText("- O me construyes una buena piscina o voy a mojarme con el vecino, y te recuerdo que el tampoco tiene piscina",50,725)
    //Aqui deberiamos meter un boton continuar si sigue habiendo mas texto
    
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
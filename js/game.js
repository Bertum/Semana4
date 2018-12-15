$(document).ready(function(){
    SCREEN_HEIGHT = window.innerHeight;
    SCREEN_WIDTH = window.innerWidth;
    //ORDENES SOBRE EL MENU
    //TODO pasar esto a una función para controlar el menu.
    $("#play").click(function(){
        $("#menu").fadeOut("slow");
        init();
    });
});

function init() {
    initCanvas();
	gameCoolDown = setTimeout("gameLoop()",1000);
}

function gameLoop() {
    BACKGROUND_CTX.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    INTERACTIVE_CTX.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    HUD_CTX.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    DIALOGS_CTX.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

    //Dibujar hud
    paintHud();
    
    //Dibujar bocadillo de texto
    paintBubble();
    
	clearTimeout(gameCoolDown);
	gameCoolDown = setTimeout("gameLoop()", 33);
}
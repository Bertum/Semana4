var temporizador;


//IMAGENES
//MATERIALES
var imgHudCemento = new Image();
imgHudCemento.src = "img/materiales/cemento.png"
var imgHudHierro = new Image();
imgHudHierro.src = "img/materiales/hierro.png"
var imgHudLadrillos = new Image();
imgHudLadrillos.src = "img/materiales/ladrillos.png"
var imgHudMadera = new Image();
imgHudMadera.src = "img/materiales/madera.png"
var imgHudTacha = new Image();
imgHudTacha.src = "img/materiales/tacha.png"
var imgHudTela = new Image();
imgHudTela.src = "img/materiales/tela.png"


//OTROS
var imgBocadillo = new Image();
imgBocadillo.src = "img/bocadillo.png";


//CONTEXTOS
var contextBackground = document.getElementById("background").getContext("2d");
var contextInteractiveObjects = document.getElementById("interactiveObjects").getContext("2d");
var contextHud = document.getElementById("hud").getContext("2d");
var contextBubblesNpc = document.getElementById("bubblesNpc").getContext("2d");

//AUDIO
var audioManager = new AudioManager();








//ORDENES SOBRE EL MENU
$("#play").click(function () {
    $("#menu").fadeOut("slow");
    inicio();

})

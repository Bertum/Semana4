// Dimensiones de la pantalla
var SCREEN_HEIGHT;
var SCREEN_WIDTH;

// Temporizador del bucle de juego
var gameCoolDown;

//AUDIO
var AUDIO_MANAGER;

//CONTEXTOS
var BACKGROUND_CTX;
var INTERACTIVE_CTX;
var HUD_CTX;
var DIALOGS_CTX;

//BASE DE DATOS
var DATA_BASE;

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

//HUD
var HUD = new HUD();

//OTROS
var imgBocadillo = new Image();
imgBocadillo.src = "img/bocadillo.png";

//ENUMS
var ItemTypes = { "Wood": 0, "Water": 1, "Mineral": 2 }
Object.freeze(ItemTypes);

//CHARACTER
var character;

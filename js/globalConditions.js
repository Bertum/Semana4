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

//HUD
var HUD;
var INVENTORY;

//OTROS
var imgBocadillo = new Image();
imgBocadillo.src = "img/bocadillo.png";

//ENUMS
var ItemTypes = { "Wood": 0, "Water": 1, "Earth": 2, "Rock": 3 }
Object.freeze(ItemTypes);

//CHARACTER
var character;

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

//PARTIDA
var game_InteractiveObjects;

//MAPA
var CURRENT_SCENE = 1;

//MAPS
var imgHome = new Image();
imgHome.src = "img/map02.png";
var imgForest = new Image();
imgForest.src = "img/map10.png";

//OTROS
var imgBocadillo = new Image();
imgBocadillo.src = "img/bocadillo.png";

//ENUMS
var ItemTypes = { "Wood": 0, "Water": 1, "Earth": 2, "Rock": 3 }
Object.freeze(ItemTypes);

//CHARACTER
var character;

//WORKERS
var worker_Position = new Worker("js/isometricWorker.js");

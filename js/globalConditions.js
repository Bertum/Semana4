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

//MAPA
var SCENE;
var CURRENT_SCENE = 1;

//OTROS
var imgBocadillo = new Image();
imgBocadillo.src = "img/bocadillo.png";

//ENUMS
var ItemTypes = { "Wood": 0, "Water": 1, "Earth": 2, "Rock": 3 }
Object.freeze(ItemTypes);
var enumDirection = {  //Dirección para NPCs y personaje.
    RIGHT: 0,
    DOWN: 1,
    LEFT: 2,
    UP: 3,
};
Object.freeze(enumDirection);

//CHARACTER
var character;

//WORKERS
var worker_Position = new Worker("js/isometricWorker.js");

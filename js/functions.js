/**
 * Inicializa el control del jugador
 */
function initKeyHandler() {
    $(document).keydown(function (event) {
        if (event.key == "w") { character.nextMove = enumDirection.UP; character.lastNextMove = enumDirection.UP; character.sprite = character.spriteUp; }
        if (event.key == "s") { character.nextMove = enumDirection.DOWN; character.lastNextMove = enumDirection.DOWN; character.sprite = character.spriteDown; }
        if (event.key == "a") { character.nextMove = enumDirection.LEFT; character.lastNextMove = enumDirection.LEFT; character.sprite = character.spriteLeft; }
        if (event.key == "d") { character.nextMove = enumDirection.RIGHT; character.lastNextMove = enumDirection.RIGHT; character.sprite = character.spriteRight; }
        if (event.key == "e") { character.interact() }
        if (event.key == "f") { useMaterialsToBuild() }

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
        //Carga los objetos interactivos de la escena actual

        AUDIO_MANAGER.playMusic();
        gameCoolDown = setTimeout("gameLoop()", 1000);
    });
    $("#menuContinue").click(function () {
        $("#menuScreen").fadeOut("slow");
        DATA_BASE.loadInventory();
        //Carga los objetos interactivos de la escena actual

        AUDIO_MANAGER.playMusic();
        gameCoolDown = setTimeout("gameLoop()", 1000);
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
    $("#playerCanvas").attr("width", SCREEN_WIDTH);
    $("#playerCanvas").attr("height", SCREEN_HEIGHT);
    PLAYER_CTX = document.getElementById("playerCanvas").getContext("2d");            //Canvas para el jugador
}

/**
 * Inicializa la base de datos de la aplicación
 */
function initDB() {
    DATA_BASE = new DataBase();
    DATA_BASE.createDataBase();
}

/**
 * Carga los objetos interactivos de la escena actual,se llama desde el objeto data_base
 */
function gameChangeScene(datos) {
    //Carga de estos en la matriz
    //Limpimiamos pantalla
    INTERACTIVE_CTX.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    //Limpiamos el array con los objetos.
    game_InteractiveObjects = create2DArray(16);
    //Y creamos y pintamos cada item
    fillInteractiveObjects(datos);

}

function fillInteractiveObjects(datos) {
    for (var i = 0; i < datos.rows.length; i++) {
        if (datos.rows[i].wasted == 0) {
            game_InteractiveObjects[datos.rows[i].x][datos.rows[i].y] = new Item(
                datos.rows[i].id,
                datos.rows[i].x,
                datos.rows[i].y,
                datos.rows[i].type,
                datos.rows[i].scene,
                datos.rows[i].wasted
            )
        }
    }
}
/**
 * Calcula proyeccion isometrica con offsets
 */
function calcIsoProyection(x, y, imgSprite) {
    var isoX = (x / 2 - y / 2);
    var isoY = (x / 2 + y / 2);
    isoX = (isoX * SCENE.tileWidth) + SCENE.width / 2 - (imgSprite.width / 2);
    isoY = (isoY * SCENE.tileHeight) + (SCENE.tileHeight / 2) - imgSprite.height;
    return { "proyX": isoX, "proyY": isoY }
}

function drawItems() {
    for (var x = 0; x < 16; x++) {
        for (var y = 0; y < 16; y++) {
            var item = game_InteractiveObjects[x][y];
            if (item != undefined) {
                item.draw();
            }
        }
    };
}

function drawBuildings() {
    for (let index = 0; index < game_buildings.length; index++) {
        game_buildings[index].draw();
    }
}
/**
 * Crear un array bidimensional de el tamaño pasado
 */
function create2DArray(size) {
    var arr = new Array();

    // Creates all lines:
    for (var i = 0; i < size; i++) {
        arr.push(new Array());
    }

    for (var x = 0; x < 16; x++) {
        for (var y = 0; y < 16; y++) {
            arr[x][y] = undefined;
        }
    };

    return arr;
}

function useMaterialsToBuild() {
    var arrayMessage = new Array();

    if (character.x < 7 && character.x > 3 && character.y == 7) {
        console.log("situados")
        switch (game_momentum) {
            case 1:
                if (INVENTORY.wood.quantity > 4 && INVENTORY.rock.quantity > 14 && INVENTORY.water.quantity > 19) {
                    INVENTORY.wood.quantity -= 5;
                    INVENTORY.rock.quantity -= 15;
                    INVENTORY.water.quantity -= 20;
                    console.log("VAMOS A ACTUALIZAR INVENTARIO")
                    DATA_BASE.updateInventory();
                    console.log("ACTUALIZADO")
                    buildWaterPool();
                    arrayMessage.push({ "dialog": "¡HAS CONSTRUIDO LA PISCINA!" });
                    dialogManager.showText(arrayMessage);
                    DATA_BASE.momentumIncrement();
                } else {
                    arrayMessage.push({ "dialog": "AUN NO DISPONES DE LOS MATERIALES" });
                    dialogManager.showText(arrayMessage);
                }
                break;

            default:
                dialogManager.hideText();
                break;
        }


    }

}

function buildWaterPool() {
    game_buildings.push(new Building(0, 6, 2));
    for (var x = 2; x <= 6; x++) {
        for (var y = 0; y <= 2; y++) {
            DATA_BASE.insertInteractive(3, 1, x, y, 0)
        }
    }
    setTimeout(new function () {
        DATA_BASE.loadScene();
    }, 500);
}
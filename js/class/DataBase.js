function DataBase() {
    var dbName = "GameDB";
    var dbVersion = "1.0";
    var dbDescription = "Almacena la información del juego.";
    var dbSize = 2 * 1024 * 1024;
    this.dataBase = openDatabase(dbName, dbVersion, dbDescription, dbSize);

    this.createDataBase = function () {
        this.dataBase.transaction(function (tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS DIALOGS (id INTEGER PRIMARY KEY, dialog TEXT, momentum INTEGER, owner INTEGER,random INTEGER)');
            tx.executeSql('CREATE TABLE IF NOT EXISTS NPCS (id INTEGER PRIMARY KEY, description TEXT)');
            tx.executeSql('CREATE TABLE IF NOT EXISTS SCENE (id INTEGER PRIMARY KEY, description TEXT)');
            tx.executeSql('CREATE TABLE IF NOT EXISTS INVENTORY (id INTEGER PRIMARY KEY, class TEXT, quantity INTEGER)');
            tx.executeSql('CREATE TABLE IF NOT EXISTS TYPES (id INTEGER PRIMARY KEY, class TEXT)');
            tx.executeSql('CREATE TABLE IF NOT EXISTS INTERACTIVE (id INTEGER PRIMARY KEY, type INTEGER, scene INTEGER, x INTEGER, y INTEGER, wasted INTEGER)');
        });
    }

    /**
     * Inicializa los datos de una partida nueva.
     */
    this.resetDataBase = function () {
        console.log("reset")
        var me = this;
        this.dataBase.transaction(function (tx) {
            // Tabla INVENTORY            
            tx.executeSql('DELETE FROM INVENTORY', [], function () {
                tx.executeSql('INSERT INTO INVENTORY (id, class, quantity) values(?, ?, ?)', [ItemTypes.Wood, "Wood", 0], function () { }, function () { console.log("error") });
                tx.executeSql('INSERT INTO INVENTORY (id, class, quantity) values(?, ?, ?)', [ItemTypes.Water, "Water", 0], function () { }, function () { console.log("error") });
                tx.executeSql('INSERT INTO INVENTORY (id, class, quantity) values(?, ?, ?)', [ItemTypes.Rock, "Rock", 0], function () { }, function () { console.log("error") });
                tx.executeSql('INSERT INTO INVENTORY (id, class, quantity) values(?, ?, ?)', [5, "momentum", 0], function () { }, function () { console.log("error") });
            }, function () { console.log("Could not delete") });


            // Tabla TYPES            
            tx.executeSql("DELETE FROM TYPES", [], function () { }, function () { console.log("Could not delete") });
            tx.executeSql('INSERT INTO TYPES (id, class) values(?,?)', [1, "tree"], function () { }, function () { console.log("error") });
            tx.executeSql('INSERT INTO TYPES (id, class) values(?,?)', [2, "rock"], function () { }, function () { console.log("error") });
            tx.executeSql('INSERT INTO TYPES (id, class) values(?,?)', [3, "water"], function () { }, function () { console.log("error") });
            tx.executeSql('INSERT INTO TYPES (id, class) values(?,?)', [4, "house"], function () { }, function () { console.log("error") });;
            tx.executeSql('INSERT INTO TYPES (id, class) values(?,?)', [5, "momentum"], function () { }, function () { console.log("Could not delete") });

            // Tabla DIALOGS                 
            tx.executeSql("DELETE FROM DIALOGS", [], function () { }, function () { console.log("Could not delete") });
            tx.executeSql('INSERT INTO DIALOGS (id, dialog, momentum,owner,random) values(?, ?, ?, ?, ?)', [0, "Hola cariño, pulsa la E para asentir con la cabeza", 0, 1, 0], function () { }, function () { console.log("error") });
            tx.executeSql('INSERT INTO DIALOGS (id, dialog, momentum,owner,random) values(?, ?, ?, ?, ?)', [1, "Necesito que hagas una cosa por mi", 0, 1, 0], function () { }, function () { console.log("error") });
            tx.executeSql('INSERT INTO DIALOGS (id, dialog, momentum,owner,random) values(?, ?, ?, ?, ?)', [2, "¿Me construyes una piscina?", 0, 1, 0], function () { }, function () { console.log("error") });
            tx.executeSql('INSERT INTO DIALOGS (id, dialog, momentum,owner,random) values(?, ?, ?, ?, ?)', [3, "En la casa están los planos, ve allí", 0, 1, 0], function () { }, function () { console.log("error") });
            tx.executeSql('INSERT INTO DIALOGS (id, dialog, momentum,owner,random) values(?, ?, ?, ?, ?)', [4, "Hola soy la casa parlante constructora, si, tiene poca lógica, lo se", 1, 2, 0], function () { }, function () { console.log("error") });
            tx.executeSql('INSERT INTO DIALOGS (id, dialog, momentum,owner,random) values(?, ?, ?, ?, ?)', [5, "Para hacer la piscina necesitas los siguientes materiales", 1, 2, 0], function () { }, function () { console.log("error") });
            tx.executeSql('INSERT INTO DIALOGS (id, dialog, momentum,owner,random) values(?, ?, ?, ?, ?)', [6, "Madera x5 - Roca x15 - Agua x20", 1, 2, 0], function () { }, function () { console.log("error") });
            tx.executeSql('INSERT INTO DIALOGS (id, dialog, momentum,owner,random) values(?, ?, ?, ?, ?)', [7, "Si ya has conseguido los materiales pulsa la F despues de hablar conmigo", 1, 2, 0], function () { }, function () { console.log("error") });
            tx.executeSql('INSERT INTO DIALOGS (id, dialog, momentum,owner,random) values(?, ?, ?, ?, ?)', [8, "Siguiente favor", 2, 1, 0], function () { }, function () { console.log("error") });
            tx.executeSql('INSERT INTO DIALOGS (id, dialog, momentum,owner,random) values(?, ?, ?, ?, ?)', [9, "¿Me construyes una piscina?", 2, 1, 0], function () { }, function () { console.log("error") });

            //Randoms Mujer
            tx.executeSql('INSERT INTO DIALOGS (id, dialog, momentum,owner,random) values(?, ?, ?, ?, ?)', [80, "Muevete de una vez", 0, 1, 1], function () { }, function () { console.log("error") });
            tx.executeSql('INSERT INTO DIALOGS (id, dialog, momentum,owner,random) values(?, ?, ?, ?, ?)', [81, "¿Me ves cara de que lo vaya a hacer yo?", 0, 1, 1], function () { }, function () { console.log("error") });
            tx.executeSql('INSERT INTO DIALOGS (id, dialog, momentum,owner,random) values(?, ?, ?, ?, ?)', [82, "¿Necesitas ayuda? a mi que me cuentas", 0, 1, 1], function () { }, function () { console.log("error") });
            tx.executeSql('INSERT INTO DIALOGS (id, dialog, momentum,owner,random) values(?, ?, ?, ?, ?)', [83, "Los he visto más rápidos", 0, 1, 1], function () { }, function () { console.log("error") });
            tx.executeSql('INSERT INTO DIALOGS (id, dialog, momentum,owner,random) values(?, ?, ?, ?, ?)', [84, "¿Este vestido me hace gorda?", 0, 1, 1], function () { }, function () { console.log("error") });
            tx.executeSql('INSERT INTO DIALOGS (id, dialog, momentum,owner,random) values(?, ?, ?, ?, ?)', [85, "¿Por que vas vestido de caballero?", 0, 1, 1], function () { }, function () { console.log("error") });

            // Tabla INTERACTIVE
            tx.executeSql('DELETE FROM INTERACTIVE', [], function () { }, function () { console.log("Could not delete") });
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [4, 1, 4, 4, 0], function () { }, function () { console.log("error") });
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [4, 1, 4, 5, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [4, 1, 4, 6, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [4, 1, 5, 4, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [4, 1, 5, 5, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [4, 1, 5, 6, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [4, 1, 6, 4, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [4, 1, 6, 5, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [4, 1, 6, 6, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [2, 2, 15, 11, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [2, 2, 15, 10, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [2, 2, 14, 11, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [2, 2, 14, 10, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [2, 2, 14, 9, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [2, 2, 14, 1, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [2, 2, 6, 5, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [2, 2, 7, 5, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [2, 2, 7, 6, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [1, 2, 0, 4, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [1, 2, 0, 5, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [1, 2, 0, 6, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [1, 2, 0, 7, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [1, 2, 1, 5, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [1, 2, 1, 6, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [1, 2, 1, 1, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [1, 2, 1, 7, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [1, 2, 1, 2, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [1, 2, 2, 2, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [1, 2, 2, 6, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [1, 2, 2, 7, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [1, 2, 13, 3, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [1, 2, 13, 4, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [1, 2, 13, 5, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [1, 2, 12, 4, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [1, 2, 14, 4, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [1, 2, 3, 8, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [3, 2, 0, 9, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [3, 2, 1, 9, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [3, 2, 2, 9, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [3, 2, 3, 9, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [3, 2, 4, 9, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [3, 2, 5, 9, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [3, 2, 6, 9, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [3, 2, 7, 9, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [3, 2, 8, 9, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [3, 2, 8, 10, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [3, 2, 8, 11, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [3, 2, 8, 12, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [3, 2, 8, 13, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [3, 2, 8, 14, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [3, 2, 9, 14, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [3, 2, 10, 14, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [3, 2, 11, 14, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [3, 2, 12, 14, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [3, 2, 13, 14, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [3, 2, 14, 14, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [3, 2, 15, 14, 0]);

            me.loadInventory();
        });


    }

    this.insertInteractive = function (type, scene, x, y, wasted) {
        this.dataBase.transaction(function (tx) {
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [type, scene, x, y, wasted]);
        });
    }

    /**
     * Devuelve una lista de objetos de un mapa según su ID.
     */
    this.loadScene = function () {
        this.dataBase.transaction(function (tx) {
            tx.executeSql('SELECT * FROM INTERACTIVE WHERE scene=' + CURRENT_SCENE, [], function (tx, results) {
                //console.log("Conseguimos los INTERACTIVE")
                INTERACTIVE_RESULTS = results;
                gameChangeScene(INTERACTIVE_RESULTS);
            });

            // tx.executeSql('SELECT quantity FROM INVENTORY WHERE id=5', [], function (tx, results) {
            //     game_momentum = results.rows[0].quantity;
            // });

        });
    }

    /**
     * Devuelve un dialogo según su ID.
     */
    this.loadDialog = function (id) {
        var me = this;
        this.dataBase.transaction(function (tx) {
            tx.executeSql('SELECT dialog FROM DIALOGS WHERE momentum=' + game_momentum + ' AND owner=' + id + ' AND random=0', [], function (tx, results) {
                if (results.rows[0] != undefined) {
                    dialogManager.showText(results.rows);
                } else {
                    tx.executeSql('SELECT dialog FROM DIALOGS WHERE  owner=' + id + ' AND random=1', [], function (tx, results) {
                        if (results.rows.length > 0) {
                            var randomNumber = Math.floor(Math.random() * results.rows.length)
                            var arrayRandomDialogs = new Array();
                            arrayRandomDialogs.push(results.rows[randomNumber])
                            dialogManager.showText(arrayRandomDialogs);
                        }
                    });
                }
            });
        });
    }

    this.momentumIncrement = function () {
        game_momentum += 1;
        console.log("MOMENTUM INCREMENT: " + game_momentum)
        this.dataBase.transaction(function (tx) {
            tx.executeSql('UPDATE INVENTORY SET quantity=' + game_momentum + ' WHERE id=5', [], function (tx, results) {
                //console.log("incremento de el momento correcto")
            });
        });
    }

    /**
     * devuelve un objeto Inventory con los datos de la base de datos ya cargados.
     */
    this.loadInventory = function () {
        var me = this;
        this.dataBase.transaction(function (tx) {
            tx.executeSql('SELECT * FROM INVENTORY', [], function (tx, results) {
                console.log(results.rows)
                if (results.rows.length == 0) {
                    INVENTORY = new Inventory(new Wood(0), new Water(0), new Rock(0));
                } else {
                    var wood;
                    var water;
                    var rock;
                    for (var i = 0; i < results.rows.length; i++) {
                        switch (results.rows[i].id) {
                            case ItemTypes.Water:
                                water = new Water(results.rows[i].quantity)
                                break;
                            case ItemTypes.Wood:
                                wood = new Wood(results.rows[i].quantity)
                                break;
                            case ItemTypes.Rock:
                                rock = new Rock(results.rows[i].quantity)
                                break;
                            case 5:
                                //guarda momentum
                                console.log("MOMENTUM VALOR: " + results.rows[i].quantity);
                                game_momentum = results.rows[i].quantity;
                                if (game_momentum == 3) {
                                    game_buildings.push(new Building(0, 6, 2));
                                }
                                break;
                        }
                    }
                    INVENTORY = new Inventory(wood, water, rock);
                }
            });

            me.loadScene();
        });

    }

    this.updateInventory = function () {
        this.dataBase.transaction(function (tx) {
            tx.executeSql('UPDATE INVENTORY SET quantity=' + INVENTORY.wood.quantity + ' WHERE id=' + ItemTypes.Wood, [], function (tx, results) { });
            tx.executeSql('UPDATE INVENTORY SET quantity=' + INVENTORY.water.quantity + ' WHERE id=' + ItemTypes.Water, [], function (tx, results) { });
            tx.executeSql('UPDATE INVENTORY SET quantity=' + INVENTORY.rock.quantity + ' WHERE id=' + ItemTypes.Rock, [], function (tx, results) { });
        });
    }

    this.updateInteractive = function (id) {
        this.dataBase.transaction(function (tx) {
            tx.executeSql('UPDATE INTERACTIVE SET wasted=1 WHERE id=' + id, [], function (tx, results) {
                for (let i = 0; i < game_InteractiveObjects.length; i++) {
                    for (let a = 0; a < game_InteractiveObjects.length; a++) {
                        if (game_InteractiveObjects[i][a] != undefined) {
                            if (game_InteractiveObjects[i][a].id == id) {
                                game_InteractiveObjects[i][a] = undefined;
                            }
                        }
                    }
                }
            });
        });
    }
}//END


// TABLAS PARA BASE DE DATOS:
// DIALOGS:
// ID(PK) 			DIALOG 					    OWNER(FK NPCS.ID)

// NPCS:
// ID(PK)			DESCRIPTION

// SCENE:
// ID(PK)	    	DESCRITION

// TYPES:
// ID(PK)		    CLASS			

// INVENTORY:
// ID(PK)          CLASS                       QUANTITY

// INTERACTIVE:
// ID(PK)			TYPE(FK TYPES.ID)			SCENE(FK SCENE.ID)			X			Y			WASTED 

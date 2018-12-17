function DataBase() {
    var dbName = "GameDB";
    var dbVersion = "1.0";
    var dbDescription = "Almacena la información del juego.";
    var dbSize = 2 * 1024 * 1024;
    this.dataBase = openDatabase(dbName, dbVersion, dbDescription, dbSize);

    this.createDataBase = function () {
        this.dataBase.transaction(function (tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS DIALOGS (id INTEGER PRIMARY KEY, dialog TEXT, momentum INTEGER, owner INTEGER)');
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
        this.dataBase.transaction(function (tx) {
            // Tabla INVENTORY
            tx.executeSql('DELETE FROM INVENTORY');
            tx.executeSql('INSERT INTO INVENTORY (id, class, quantity) values(?, ?, ?)', [ItemTypes.Wood, "Wood", 0], function () { console.log("success") }, function () { console.log("error") });
            tx.executeSql('INSERT INTO INVENTORY (id, class, quantity) values(?, ?, ?)', [ItemTypes.Water, "Water", 0]);
            tx.executeSql('INSERT INTO INVENTORY (id, class, quantity) values(?, ?, ?)', [ItemTypes.Rock, "Rock", 0]);

            // Tabla TYPES
            tx.executeSql("DELETE FROM TYPES", [], function () { console.log("Successfully Deleted") }, function () { console.log("Could not delete") });
            tx.executeSql('INSERT INTO TYPES (id, class) values(?,?)', [1, "tree"]);
            tx.executeSql('INSERT INTO TYPES (id, class) values(?,?)', [2, "rock"]);
            tx.executeSql('INSERT INTO TYPES (id, class) values(?,?)', [3, "water"]);
            tx.executeSql('INSERT INTO TYPES (id, class) values(?,?)', [4, "house"]);

            // Tabla INTERACTIVE
            tx.executeSql('DELETE FROM INTERACTIVE', [], function () { console.log("Successfully Deleted") }, function () { console.log("Could not delete") });
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [4, 1, 4, 4, 0], function () { console.log("success") }, function () { console.log("error") });
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [4, 1, 4, 5, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [4, 1, 4, 6, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [4, 1, 5, 4, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [4, 1, 5, 5, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [4, 1, 5, 6, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [4, 1, 6, 5, 0]);
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
                fillInteractiveObjects(INTERACTIVE_RESULTS);
            });
        });
    }

    /**
     * Devuelve un dialogo según su ID.
     */
    this.loadDialog = function (dialogId) {
        this.dataBase.transaction(function (tx) {
            //TODO
        });
    }

    /**
     * devuelve un objeto Inventory con los datos de la base de datos ya cargados.
     */
    this.loadInventory = function () {
        this.dataBase.transaction(function (tx) {
            tx.executeSql('SELECT * FROM INVENTORY', [], function (tx, results) {
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
                        }
                    }
                    INVENTORY = new Inventory(wood, water, rock);
                }
            });
        });
    }
}
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

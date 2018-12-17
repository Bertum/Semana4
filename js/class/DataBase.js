function DataBase() {
    var dbName = "GameDB";
    var dbVersion = "1.0";
    var dbDescription = "Almacena la información del juego.";
    var dbSize = 2 * 1024 * 1024;
    this.INVENTORY_TABLE = "INVENTORY";
    this.dataBase = openDatabase(dbName, dbVersion, dbDescription, dbSize);

    this.createDataBase = function () {
        this.dataBase.transaction(function (tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS DIALOGS (id INTEGER PRIMARY KEY, dialog TEXT, momentum INTEGER, owner INTEGER)');
            tx.executeSql('CREATE TABLE IF NOT EXISTS NPCS (id INTEGER PRIMARY KEY, description TEXT)');
            tx.executeSql('CREATE TABLE IF NOT EXISTS SCENE (id INTEGER PRIMARY KEY, description TEXT)');
            tx.executeSql('CREATE TABLE IF NOT EXISTS ' + this.INVENTORY_TABLE + ' (id INTEGER PRIMARY KEY, class TEXT, quantity INTEGER)');
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
            tx.executeSql('DELETE FROM ' + this.INVENTORY_TABLE);
            tx.executeSql('INSERT INTO ' + this.INVENTORY_TABLE + '(id, class, quantity) values(?, ?, ?)', [ItemTypes.Wood, "Wood", 0]);
            tx.executeSql('INSERT INTO ' + this.INVENTORY_TABLE + '(id, class, quantity) values(?, ?, ?)', [ItemTypes.Water, "Water", 0]);
            tx.executeSql('INSERT INTO ' + this.INVENTORY_TABLE + '(id, class, quantity) values(?, ?, ?)', [ItemTypes.Earth, "Earth", 0]);
            tx.executeSql('INSERT INTO ' + this.INVENTORY_TABLE + '(id, class, quantity) values(?, ?, ?)', [ItemTypes.Rock, "Rock", 0]);
        });

        /**
         * TODO Creamos todos los objetos interactivos de el juego
         * (NPCS??????)
         */
        this.dataBase.transaction(function (tx) {
            // Tabla INTERACTIVE
            tx.executeSql('DELETE FROM INTERACTIVE');
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [1, 1, 0, 0, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [1, 1, 0, 2, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [1, 1, 2, 0, 0]);
            tx.executeSql('INSERT INTO INTERACTIVE (type, scene,x,y,wasted) values(?, ?, ?, ?, ?)', [1, 1, 15, 15, 0]);
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
                drawInteractiveObjects(INTERACTIVE_RESULTS);
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
            var inventory;
            tx.executeSql('SELECT * FROM ' + this.INVENTORY_TABLE, [], function (tx, results) {
                if (results.rows.length == 0) {
                    INVENTORY = new Inventory(new Wood(0), new Water(0), new Earth(0), new Rock(0));
                } else {
                    var wood;
                    var earth;
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
                            case ItemTypes.Earth:
                                earth = new Earth(results.rows[i].quantity)
                                break;
                            case ItemTypes.Rock:
                                rock = new Rock(results.rows[i].quantity)
                                break;
                        }
                    }
                    INVENTORY = new Inventory(wood, water, earth, rock);
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
1
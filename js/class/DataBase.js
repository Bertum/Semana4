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
            tx.executeSql('INSERT INTO ' + this.INVENTORY_TABLE + '(id, class, quantity) values(1, Rock, 0)');
            tx.executeSql('INSERT INTO ' + this.INVENTORY_TABLE + '(id, class, quantity) values(2, Water, 0)');
            tx.executeSql('INSERT INTO ' + this.INVENTORY_TABLE + '(id, class, quantity) values(3, Earth, 0)');
            tx.executeSql('INSERT INTO ' + this.INVENTORY_TABLE + '(id, class, quantity) values(4, Wood, 0)');
        });
    }

    /**
     * Devuelve una lista de objetos de un mapa según su ID.
     */
    this.loadScene = function (sceneId) {
        this.dataBase.transaction(function (tx) {
            //TODO 
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
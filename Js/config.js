function configWorl1() {


   
    //Placing the blocks

    var BlockSet = [
        { antallBlokker: 20, xPos: 50, yPos: 90 },
        { antallBlokker: 2, xPos: 400, yPos: 35 },
        { antallBlokker: 2, xPos: -50, yPos: 115 }
    ]

    var block = new Array();


    //placing the coins
    var CoinSet = [
        { antallCoins: 4, xPos: 50, yPos: 15 },
        { antallCoins: 100, xPos: 400, yPos: 15 },
        { antallCoins: 2, xPos: -50, yPos: 11 }
    ]


    var playerCoins = new Array();

    //Placing the Carrots

    var CarrotSet = [
        { xPos: 50, yPos: 35 },
        { xPos: 500, yPos: 45 }
    ]

    var carrots = new Array();

    //Placing the enemies

    var EnemySet = [
        { antallEnemies: 4, xPos: 50, yPos: 30, yspd: 0.5, xspd: 0.5, width: 15, height: 18, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 100 },
        { antallEnemies: 5, xPos: 200, yPos: 20, yspd: 0.5, xspd: 0.5, width: 15, height: 18, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 200 },
        { antallEnemies: 2, xPos: 400, yPos: 10, yspd: 0.5, xspd: 0.5, width: 15, height: 18, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 50 },
    ]

    var enemies = new Array();
    var enemyStartXValue = new Array();
    var startSpeed = new Array();

    for (var i = 0; i < EnemySet.length; i++) {
        enemies[i] = new Array();
        enemyStartXValue[i] = new Array();
        startSpeed[i] = new Array();


        for (var j = 0; j < EnemySet[i].antallEnemies; j++) {
            startSpeed[i][j] = false;
            enemies[i][j] = new entity("img/Small1.png", EnemySet[i].xPos + (j * 15), EnemySet[i].yPos, EnemySet[i].width, EnemySet[i].height, EnemySet[i].yspd, EnemySet[i].gravity, EnemySet[i].weight, EnemySet[i].currentHp, EnemySet[i].damage);

            //Saving the start position of each enemuy in an array
            enemyStartXValue[i][j] = enemies[i][j].xPosition

            //Giving each of the enemies the range which the group is limited to
            enemies[i][j].posibleRange = EnemySet[i].range

            //A value for each enemy of the max limit the can go to the right
            enemies[i][j].scopeRight = enemyStartXValue[i][j] + EnemySet[i].range;

            //And a value of the max limit to the left
            enemies[i][j].scopeLeft = enemyStartXValue[i][j] - EnemySet[i].range;

            //Lastly we give the enemies their start value 
            enemies[i][j].startXposition = enemyStartXValue[i][j].currentHp;
            console.log(enemies[i][j]);
        }

    }


    // Placing the objective
    var finnishLine = [
        { xPos: 50, yPos: 35 },
    ]



    var bulletInventory = 10;
    var bulletFired = false;
    var bulletList = [];

    mainLoop();


}



function configWorl2() {

    //Setings for the player
    var playerName;
    var playerXPosition = canvasEl.width / 2;
    var playerYPosition = 30;
    var playerWidth = 15;
    var playerHeight = 18;
    var playerYspd = 2;
    var playerGravity = 20;
    var playerWeight = 0.05;
    var playerHp = 100;
    var playerDamage = 5;

    //

    var player = new entity("img/Small1.png", playerXPosition, playerYPosition, playerWidth, playerHeight, playerYspd, playerGravity, playerWeight, playerHp, playerDamage, playerName)

    //Placing the blocks

    var BlockSet = [
        { antallBlokker: 20, xPos: 50, yPos: 90 },
        { antallBlokker: 2, xPos: 400, yPos: 35 },
        { antallBlokker: 2, xPos: -50, yPos: 115 }
    ]

    var block = new Array();


    //placing the coins
    var CoinSet = [
        { antallCoins: 4, xPos: 50, yPos: 15 },
        { antallCoins: 100, xPos: 400, yPos: 15 },
        { antallCoins: 2, xPos: -50, yPos: 11 }
    ]


    var playerCoins = new Array();

    //Placing the Carrots

    var CarrotSet = [
        { xPos: 50, yPos: 35 },
        { xPos: 500, yPos: 45 }
    ]

    var carrots = new Array();

    //Placing the enemies

    var EnemySet = [
        { antallEnemies: 4, xPos: 50, yPos: 30, yspd: 0.5, xspd: 0.5, width: 15, height: 18, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 100 },
        { antallEnemies: 5, xPos: 200, yPos: 20, yspd: 0.5, xspd: 0.5, width: 15, height: 18, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 200 },
        { antallEnemies: 2, xPos: 400, yPos: 10, yspd: 0.5, xspd: 0.5, width: 15, height: 18, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 50 },
    ]

    var enemies = new Array();
    var enemyStartXValue = new Array();
    var startSpeed = new Array();

    for (var i = 0; i < EnemySet.length; i++) {
        enemies[i] = new Array();
        enemyStartXValue[i] = new Array();
        startSpeed[i] = new Array();


        for (var j = 0; j < EnemySet[i].antallEnemies; j++) {
            startSpeed[i][j] = false;
            enemies[i][j] = new entity("img/Small1.png", EnemySet[i].xPos + (j * 15), EnemySet[i].yPos, EnemySet[i].width, EnemySet[i].height, EnemySet[i].yspd, EnemySet[i].gravity, EnemySet[i].weight, EnemySet[i].currentHp, EnemySet[i].damage);

            //Saving the start position of each enemuy in an array
            enemyStartXValue[i][j] = enemies[i][j].xPosition

            //Giving each of the enemies the range which the group is limited to
            enemies[i][j].posibleRange = EnemySet[i].range

            //A value for each enemy of the max limit the can go to the right
            enemies[i][j].scopeRight = enemyStartXValue[i][j] + EnemySet[i].range;

            //And a value of the max limit to the left
            enemies[i][j].scopeLeft = enemyStartXValue[i][j] - EnemySet[i].range;

            //Lastly we give the enemies their start value 
            enemies[i][j].startXposition = enemyStartXValue[i][j].currentHp;
            console.log(enemies[i][j]);
        }

    }


    // Placing the objective
    var finnishLine = [
        { xPos: 50, yPos: 35 },
    ]




    //mainLoop



    var bulletInventory = 10;
    var bulletFired = false;
    var bulletList = [];


}

function configWorld3() {


    //Setings for the player
    var playerName;
    var playerXPosition = canvasEl.width / 2;
    var playerYPosition = 30;
    var playerWidth = 15;
    var playerHeight = 18;
    var playerYspd = 2;
    var playerGravity = 20;
    var playerWeight = 0.05;
    var playerHp = 100;
    var playerDamage = 5;

    //

    var player = new entity("img/Small1.png", playerXPosition, playerYPosition, playerWidth, playerHeight, playerYspd, playerGravity, playerWeight, playerHp, playerDamage, playerName)

    //Placing the blocks

    var BlockSet = [
        { antallBlokker: 20, xPos: 50, yPos: 90 },
        { antallBlokker: 2, xPos: 400, yPos: 35 },
        { antallBlokker: 2, xPos: -50, yPos: 115 }
    ]

    var block = new Array();


    //placing the coins
    var CoinSet = [
        { antallCoins: 4, xPos: 50, yPos: 15 },
        { antallCoins: 100, xPos: 400, yPos: 15 },
        { antallCoins: 2, xPos: -50, yPos: 11 }
    ]


    var playerCoins = new Array();

    //Placing the Carrots

    var CarrotSet = [
        { xPos: 50, yPos: 35 },
        { xPos: 500, yPos: 45 }
    ]

    var carrots = new Array();

    //Placing the enemies

    var EnemySet = [
        { antallEnemies: 4, xPos: 50, yPos: 30, yspd: 0.5, xspd: 0.5, width: 15, height: 18, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 100 },
        { antallEnemies: 5, xPos: 200, yPos: 20, yspd: 0.5, xspd: 0.5, width: 15, height: 18, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 200 },
        { antallEnemies: 2, xPos: 400, yPos: 10, yspd: 0.5, xspd: 0.5, width: 15, height: 18, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 50 },
    ]

    var enemies = new Array();
    var enemyStartXValue = new Array();
    var startSpeed = new Array();

    for (var i = 0; i < EnemySet.length; i++) {
        enemies[i] = new Array();
        enemyStartXValue[i] = new Array();
        startSpeed[i] = new Array();


        for (var j = 0; j < EnemySet[i].antallEnemies; j++) {
            startSpeed[i][j] = false;
            enemies[i][j] = new entity("img/Small1.png", EnemySet[i].xPos + (j * 15), EnemySet[i].yPos, EnemySet[i].width, EnemySet[i].height, EnemySet[i].yspd, EnemySet[i].gravity, EnemySet[i].weight, EnemySet[i].currentHp, EnemySet[i].damage);

            //Saving the start position of each enemuy in an array
            enemyStartXValue[i][j] = enemies[i][j].xPosition

            //Giving each of the enemies the range which the group is limited to
            enemies[i][j].posibleRange = EnemySet[i].range

            //A value for each enemy of the max limit the can go to the right
            enemies[i][j].scopeRight = enemyStartXValue[i][j] + EnemySet[i].range;

            //And a value of the max limit to the left
            enemies[i][j].scopeLeft = enemyStartXValue[i][j] - EnemySet[i].range;

            //Lastly we give the enemies their start value 
            enemies[i][j].startXposition = enemyStartXValue[i][j].currentHp;
            console.log(enemies[i][j]);
        }

    }


    // Placing the objective
    var finnishLine = [
        { xPos: 50, yPos: 35 },
    ]




    //mainLoop



    var bulletInventory = 10;
    var bulletFired = false;
    var bulletList = [];


}

function configWorld4() {


    //Setings for the player
    var playerName;
    var playerXPosition = canvasEl.width / 2;
    var playerYPosition = 30;
    var playerWidth = 15;
    var playerHeight = 18;
    var playerYspd = 2;
    var playerGravity = 20;
    var playerWeight = 0.05;
    var playerHp = 100;
    var playerDamage = 5;

    //

    var player = new entity("img/Small1.png", playerXPosition, playerYPosition, playerWidth, playerHeight, playerYspd, playerGravity, playerWeight, playerHp, playerDamage, playerName)

    //Placing the blocks

    var BlockSet = [
        { antallBlokker: 20, xPos: 50, yPos: 90 },
        { antallBlokker: 2, xPos: 400, yPos: 35 },
        { antallBlokker: 2, xPos: -50, yPos: 115 }
    ]

    var block = new Array();


    //placing the coins
    var CoinSet = [
        { antallCoins: 4, xPos: 50, yPos: 15 },
        { antallCoins: 100, xPos: 400, yPos: 15 },
        { antallCoins: 2, xPos: -50, yPos: 11 }
    ]


    var playerCoins = new Array();

    //Placing the Carrots

    var CarrotSet = [
        { xPos: 50, yPos: 35 },
        { xPos: 500, yPos: 45 }
    ]

    var carrots = new Array();

    //Placing the enemies

    var EnemySet = [
        { antallEnemies: 4, xPos: 50, yPos: 30, yspd: 0.5, xspd: 0.5, width: 15, height: 18, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 100 },
        { antallEnemies: 5, xPos: 200, yPos: 20, yspd: 0.5, xspd: 0.5, width: 15, height: 18, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 200 },
        { antallEnemies: 2, xPos: 400, yPos: 10, yspd: 0.5, xspd: 0.5, width: 15, height: 18, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 50 },
    ]

    var enemies = new Array();
    var enemyStartXValue = new Array();
    var startSpeed = new Array();

    for (var i = 0; i < EnemySet.length; i++) {
        enemies[i] = new Array();
        enemyStartXValue[i] = new Array();
        startSpeed[i] = new Array();


        for (var j = 0; j < EnemySet[i].antallEnemies; j++) {
            startSpeed[i][j] = false;
            enemies[i][j] = new entity("img/Small1.png", EnemySet[i].xPos + (j * 15), EnemySet[i].yPos, EnemySet[i].width, EnemySet[i].height, EnemySet[i].yspd, EnemySet[i].gravity, EnemySet[i].weight, EnemySet[i].currentHp, EnemySet[i].damage);

            //Saving the start position of each enemuy in an array
            enemyStartXValue[i][j] = enemies[i][j].xPosition

            //Giving each of the enemies the range which the group is limited to
            enemies[i][j].posibleRange = EnemySet[i].range

            //A value for each enemy of the max limit the can go to the right
            enemies[i][j].scopeRight = enemyStartXValue[i][j] + EnemySet[i].range;

            //And a value of the max limit to the left
            enemies[i][j].scopeLeft = enemyStartXValue[i][j] - EnemySet[i].range;

            //Lastly we give the enemies their start value 
            enemies[i][j].startXposition = enemyStartXValue[i][j].currentHp;
            console.log(enemies[i][j]);
        }

    }


    // Placing the objective
    var finnishLine = [
        { xPos: 50, yPos: 35 },
    ]




    //mainLoop



    var bulletInventory = 10;
    var bulletFired = false;
    var bulletList = [];


}

function configBossBattle() {


    //Setings for the player
    var playerName;
    var playerXPosition = canvasEl.width / 2;
    var playerYPosition = 30;
    var playerWidth = 15;
    var playerHeight = 18;
    var playerYspd = 2;
    var playerGravity = 20;
    var playerWeight = 0.05;
    var playerHp = 100;
    var playerDamage = 5;

    //

    var player = new entity("img/Small1.png", playerXPosition, playerYPosition, playerWidth, playerHeight, playerYspd, playerGravity, playerWeight, playerHp, playerDamage, playerName)

    //Placing the blocks

    var BlockSet = [
        { antallBlokker: 20, xPos: 50, yPos: 90 },
        { antallBlokker: 2, xPos: 400, yPos: 35 },
        { antallBlokker: 2, xPos: -50, yPos: 115 }
    ]

    var block = new Array();


    //placing the coins
    var CoinSet = [
        { antallCoins: 4, xPos: 50, yPos: 15 },
        { antallCoins: 100, xPos: 400, yPos: 15 },
        { antallCoins: 2, xPos: -50, yPos: 11 }
    ]


    var playerCoins = new Array();

    //Placing the Carrots

    var CarrotSet = [
        { xPos: 50, yPos: 35 },
        { xPos: 500, yPos: 45 }
    ]

    var carrots = new Array();

    //Placing the enemies

    var EnemySet = [
        { antallEnemies: 4, xPos: 50, yPos: 30, yspd: 0.5, xspd: 0.5, width: 15, height: 18, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 100 },
        { antallEnemies: 5, xPos: 200, yPos: 20, yspd: 0.5, xspd: 0.5, width: 15, height: 18, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 200 },
        { antallEnemies: 2, xPos: 400, yPos: 10, yspd: 0.5, xspd: 0.5, width: 15, height: 18, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 50 },
    ]

    var enemies = new Array();
    var enemyStartXValue = new Array();
    var startSpeed = new Array();

    for (var i = 0; i < EnemySet.length; i++) {
        enemies[i] = new Array();
        enemyStartXValue[i] = new Array();
        startSpeed[i] = new Array();


        for (var j = 0; j < EnemySet[i].antallEnemies; j++) {
            startSpeed[i][j] = false;
            enemies[i][j] = new entity("img/Small1.png", EnemySet[i].xPos + (j * 15), EnemySet[i].yPos, EnemySet[i].width, EnemySet[i].height, EnemySet[i].yspd, EnemySet[i].gravity, EnemySet[i].weight, EnemySet[i].currentHp, EnemySet[i].damage);

            //Saving the start position of each enemuy in an array
            enemyStartXValue[i][j] = enemies[i][j].xPosition

            //Giving each of the enemies the range which the group is limited to
            enemies[i][j].posibleRange = EnemySet[i].range

            //A value for each enemy of the max limit the can go to the right
            enemies[i][j].scopeRight = enemyStartXValue[i][j] + EnemySet[i].range;

            //And a value of the max limit to the left
            enemies[i][j].scopeLeft = enemyStartXValue[i][j] - EnemySet[i].range;

            //Lastly we give the enemies their start value 
            enemies[i][j].startXposition = enemyStartXValue[i][j].currentHp;
            console.log(enemies[i][j]);
        }

    }


    // Placing the objective
    var finnishLine = [
        { xPos: 50, yPos: 35 },
    ]




    //mainLoop



    var bulletInventory = 10;
    var bulletFired = false;
    var bulletList = [];


}
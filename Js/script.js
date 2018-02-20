
//startButton.addEventListener("click", startSpill);
//howToButton.addEventListener("click", displayControls);

/*
function startSpill() {

    var object = document.getElementById("startGame");
    object.parentNode.removeChild(object);
    var object2 = document.querySelector(".button");
    object2.parentNode.removeChild(object2);
    /*Animation cutscene here 




    




    //Where the game logic starts

    var playerTotalCarrotCount = 0;
    //Statssection



    createWorld();
    function createWorld() {

        var stats = document.createElement("label");
        stats.id = "stats";
        stats.style.width = "100%";
        stats.style.textAlign = "center";
        stats.innerHTML = " You currently have " + playerTotalCarrotCount + " / " + 100 + " Carrots";
        contentEl.appendChild(stats);

        //World section
        var worldEl = document.createElement("div");
        worldEl.style.display = "flex";
        worldEl.style.flexDirection = "row";


        for (var i = 0; i < worlds.length; i++) {

            var thisWorld = new world(i, worlds[i] + "world");
            var divWorld = document.createElement("div");
            divWorld.className = "world";
            divWorld.style.width = "60px";
            divWorld.style.height = "50px";
            divWorld.style.backgroundColor = "red";
            divWorld.style.margin = "10%";
            divWorld.id = thisWorld.lvl;
            divWorld.addEventListener("click", loadWorld);

            worldEl.appendChild(divWorld);
            contentEl.appendChild(worldEl);

        }
        console.log(playerTotalCarrotCount);
    }

    function loadWorld(e) {
        var curretTarget = e.target;
        var worldEl = document.querySelectorAll(".world");
        var obj = document.getElementById("stats");

        if (curretTarget.id === "0" && playerTotalCarrotCount == 0) {
            enterLvl1();
            obj.parentNode.removeChild(obj);

            for (var i = 0; i < worldEl.length; i++) {
                var currentWorld = worldEl[i];
                currentWorld.parentNode.removeChild(currentWorld);
            }


        }
        //} else if (curretTarget.id === "1") {
        //enterLvl2();
        //} else if (curretTarget.id === "2") {
        //    enterLvl3();
        //} else if (curretTarget.id === "3") {
        //    enterLvl4();
        //}

    }


    /*
    
    
    
   
    
    




}
    */


enterLvl1();
function enterLvl1() {
    var playerGameInventoryCoinCount = 0;
    var playerGameInventoryCarrotCount = 0;
    //var playerAddedCarrots = 0;



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

    //Creating the ground
    for (var i = 0; i < BlockSet.length; i++) {
        block[i] = new Array();
        for (var j = 0; j < BlockSet[i].antallBlokker; j++) {
            block[i][j] = new blocks("img/iu.jpg", BlockSet[i].xPos + (j * 40), BlockSet[i].yPos, 40, 40, 0);

        }
    }


    //placing the coins
    var CoinSet = [
        { antallCoins: 4, xPos: 50, yPos: 15 },
        { antallCoins: 100, xPos: 400, yPos: 15 },
        { antallCoins: 2, xPos: -50, yPos: 11 }
    ]


    var playerCoins = new Array();

    //Creating the coins
    for (var i = 0; i < CoinSet.length; i++) {
        playerCoins[i] = new Array();

        for (var j = 0; j < CoinSet[i].antallCoins; j++) {
            playerCoins[i][j] = new collectable("img/coin.png", CoinSet[i].xPos + (j * 20), CoinSet[i].yPos, 2, 2);

        }

    }

    //Placing the Carrots
    var CarrotSet = [
        { xPos: 50, yPos: 35 },
        { xPos: 500, yPos: 45 }
    ]

    var carrots = new Array();

    //Creating the carrots
    for (var i = 0; i < CarrotSet.length; i++) {
        carrots[i] = new collectable("img/treasure.png", CarrotSet[i].xPos, CarrotSet[i].yPos, 2, 2)
    }


    //Placing the enemies
    var EnemySet = [
        { antallEnemies: 4, xPos: 50, yPos: 30, yspd: 0.5, xspd: 0.5, width: 15, height: 18, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 100 },
        { antallEnemies: 5, xPos: 200, yPos: 20, yspd: 0.5, xspd: 0.5, width: 15, height: 18, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 200 },
        { antallEnemies: 2, xPos: 400, yPos: 10, yspd: 0.5, xspd: 0.5, width: 15, height: 18, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 50 },
    ]

    //Enemy arrays
    var enemies = new Array();
    var enemyStartXValue = new Array();
    var startSpeed = new Array();

    //Creating the enemies and their startxPosition and their startSpeed
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

        }

    }


    // Placing the objective
    var finnishLine = new collectable("img/finnishLine.png", 800, 80, 10, 10);







    var bulletInventory = 10;
    var bulletFired = false;
    var bulletList = [];

    mainLoop();
    //mainLoop
    function mainLoop() {
        var gravity = 0.09;
        player.yPosition += player.ySpd;
        finnishLine.xPosition += -player.xSpd;

        if (left) {
            player.xSpd = -3;
        }
        if (right) {
            player.xSpd = 3;
        }

        //If jump is true

        if (jump) {
            player.ySpd = -2.5;
            jump = false;
        }


        if (hasRealised && !onGround) {
            player.ySpd += gravity;
        }



        if (!left && !right) {
            player.xSpd = 0;
        }

        if (player.ySpd < player.gravity) {
            player.ySpd += player.weight;
        }


        // Health Logic

        if (player.yPosition > canvasEl.height) {
            player.CurrentHp = 0;
        }




        // Wapon logic


        if (isShooting && bulletInventory != 0 && bulletFired == false) {

            if (bulletFired == false) {
                bulletInventory--;
                //var thisBullet = new bullets(bulletStart)
                //bulletList.push(thisBullet)
                bulletFired = true;

                console.log("hei");

            }

            if (bulletFired == true) {
                setInterval(gunCooldown, 2000);
            }

            function gunCooldown() {
                bulletFired = false;

            }

        }

        /*
        function LooseLife (){
            console.log(player.CurrentHp);
        }
        */


        //Clearing the screen

        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);


        //Keeping track of the ground
        for (var i = 0; i < block.length; i++) {


            for (var j = 0; j < block[i].length; j++) {
                block[i][j].xPosition += -player.xSpd;
                if (player.collitionObject(block[i][j]) && player.yPosition + player.height < block[i][j].yPosition + player.ySpd) {
                    player.ySpd = 0;
                    onGround = true;
                    hasRealised = false;
                    player.yPosition = block[i][j].yPosition - player.height;
                }


            }

        }

        //Keeping track of the carrots
        for (var i = 0; i < carrots.length; i++) {

            carrots[i].xPosition += -player.xSpd;


            if (player.collitionObject(carrots[i])) {
                var thisCarrot = carrots.indexOf(carrots[i]);
                carrots.splice(thisCarrot, 1);

                playerGameInventoryCarrotCount++;
                console.log("Du har " + playerGameInventoryCarrotCount + " Gullerøtter");
            }

        }



        //Keeping track of the coins
        for (var i = 0; i < playerCoins.length; i++) {

            for (var j = 0; j < playerCoins[i].length; j++) {
                playerCoins[i][j].xPosition += -player.xSpd;

                if (player.collitionObject(playerCoins[i][j])) {
                    var ThisCoin = playerCoins[i].indexOf(playerCoins[i][j]);
                    playerCoins[i].splice(ThisCoin, 1);

                    playerGameInventoryCoinCount++;
                    console.log("Du har " + playerGameInventoryCoinCount + " coins");
                }
            }
        }

        if (playerGameInventoryCoinCount == 10) {
            console.log("Du kan nå få en pistol som har 10 runder med magasin");
        }

        //Keepin track of the enemies
        for (var i = 0; i < enemies.length; i++) {

            for (j = 0; j < enemies[i].length; j++) {

                if (startSpeed[i][j] == false) {
                    enemies[i][j].xPosition += -player.xSpd + EnemySet[i].xspd;
                    enemies[i][j].yPosition += EnemySet[i].yspd;
                    enemies[i][j].startXposition += -EnemySet[i].xspd;
                }

                if (startSpeed[i][j] == true) {
                    enemies[i][j].xPosition += -player.xSpd - EnemySet[i].xspd;
                    enemies[i][j].yPosition += EnemySet[i].yspd;
                    enemies[i][j].startXposition += EnemySet[i].xspd;
                }

                if (enemies[i][j].startXposition === enemies[i][j].scopeRight) {
                    startSpeed[i][j] = false;
                } else if (enemies[i][j].startXposition === enemies[i][j].scopeLeft) {
                    startSpeed[i][j] = true;
                }



                for (var k = 0; k < block.length; k++) {
                    for (var l = 0; l < block[k].length; l++) {
                        if (enemies[i][j].collitionObject(block[k][l]) && enemies[i][j].yPosition + enemies[i][j].height > block[k][l].yPosition + enemies[i][j].ySpd) {
                            enemies[i][j].ySpd = 0;
                            enemies[i][j].yPosition = block[k][l].yPosition - enemies[i][j].height;
                        }
                    }
                }


                if (player.collitionObject(enemies[i][j]) || player.yPosition > canvasEl.height) {
                    player.CurrentHp--;
                    console.log(player.CurrentHp)

                }
            }
        }




        //Rendering the coins
        for (var i = 0; i < playerCoins.length; i++) {
            for (var j = 0; j < playerCoins[i].length; j++) {
                ctx.drawImage(playerCoins[i][j].sprite, playerCoins[i][j].xPosition, playerCoins[i][j].yPosition);

            }
        }

        //Rendering the enemies
        for (var i = 0; i < enemies.length; i++) {
            for (var j = 0; j < enemies[i].length; j++) {
                ctx.drawImage(enemies[i][j].sprite, enemies[i][j].xPosition, enemies[i][j].yPosition)
            }
        }
        //Rendering the ground
        for (var i = 0; i < block.length; i++) {
            for (var j = 0; j < block[i].length; j++) {
                ctx.drawImage(block[i][j].sprite, block[i][j].xPosition, block[i][j].yPosition)
            }
        }

        //Rendering the Carrots
        for (var i = 0; i < carrots.length; i++) {
            ctx.drawImage(carrots[i].sprite, carrots[i].xPosition, carrots[i].yPosition);
        }



        //Lastly rendering the player

        ctx.drawImage(player.sprite, player.xPosition, player.yPosition);
        ctx.drawImage(finnishLine.sprite, finnishLine.xPosition, finnishLine.yPosition);




        if (player.collitionObject(finnishLine)) {
            if (carrots.length != 0) {
                console.log(" Du har ikke samlet alle gulerøttene");
               
            } else {
                console.log("Du kan gå videre i verden");
                ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
                playerTotalCarrotCount += playerGameInventoryCarrotCount;
                createWorld();
                console.log(playerTotalCarrotCount + "/" + playerGameInventoryCarrotCount);

            }
        }

        if (player.CurrentHp <= 0) {
            var dyingText = document.createElement("h1");
            dyingText.id = "dyingText";
            dyingText.innerHTML = "YOU DIED BITCH";
            dyingText.style.textAlign = "center";
            dyingText.style.color = "red";
            dyingText.style.textShadow = "2px 2px black";


            var restartButton = document.createElement("div");
            restartButton.id = "restart";
            restartButton.style.width = "384px";
            restartButton.style.height = "256px";
            restartButton.style.backgroundImage = "url('img/buttonRestart.png')";
            restartButton.style.margin = "0 auto";
            restartButton.addEventListener("click", restart);
            contentEl.appendChild(dyingText);
            contentEl.appendChild(restartButton);
            console.log(restartButton);

            function restart() {
                var obj = document.getElementById("dyingText");
                var obj1 = document.getElementById("restart");
                obj.parentNode.removeChild(obj);
                obj1.parentNode.removeChild(obj1);
                enterLvl1();
            }
        } else {
            setTimeout(mainLoop, 1000 / 60)
        }


    }


}









function enterLvl2() {
    /*alll koden her */
}

function enterLvl3() {
    /*alll koden her */
}
function enterLvl4() {
    /*alll koden her */
}

function enterBossBattle() {

    /*alll koden her */
}










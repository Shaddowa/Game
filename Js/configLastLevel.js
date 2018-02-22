function lastLevel() {
    var playerGameInventoryCoinCount = 0;
    var playerGameInventoryCarrotCount = 0;


    // Displaying the stats

    contentEl.style.height = "10%";
    contentEl.style.backgroundColor = "hsla(44, 4%, 31%, 0.71)";
    contentEl.style.display = "flex";
    contentEl.style.flexDirection = "row";
    contentEl.style.flexWrap = "wrap";
    contentEl.style.justifyContent = "space-around";
    var coinCount = document.createElement("p");
    var carrotCount = document.createElement("p");
    var message = document.createElement("p");
    coinCount.style.color = "white";
    carrotCount.style.color = "white";
    message.style.color = "white";

    contentEl.appendChild(coinCount);
    contentEl.appendChild(message);
    contentEl.appendChild(carrotCount);



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
        { antallBlokker: 100, xPos: -10, yPos: 140 },
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
        { antallCoins: 0, xPos: 50, yPos: 15 },
        { antallCoins: 0, xPos: 400, yPos: 15 },
        { antallCoins: 0, xPos: -50, yPos: 11 }
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
        { antallCarrots: 80, xPos: 50, yPos: 120 },

    ]

    var carrots = new Array();

    //Creating the carrots
    for (var i = 0; i < CarrotSet.length; i++) {
        carrots[i] = new Array();
        for (var j = 0; j < CarrotSet[i].antallCarrots; j++) {
            carrots[i][j] = new collectable("img/treasure.png", CarrotSet[i].xPos + (j * 50), CarrotSet[i].yPos, 2, 2)
        }
    }


    //Placing the enemies
    var EnemySet = [
        { antallEnemies: 0, xPos: 50, yPos: 30, yspd: 0.5, xspd: 0.5, width: 15, height: 18, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 100 },
        { antallEnemies: 0, xPos: 200, yPos: 20, yspd: 0.5, xspd: 0.5, width: 15, height: 18, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 200 },
        { antallEnemies: 0, xPos: 400, yPos: 10, yspd: 0.5, xspd: 0.5, width: 15, height: 18, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 50 },
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
    var finnishLine = new collectable("img/finnishLine.png", 20000, 100, 10, 10);







    var bulletInventory = 0;
    var bulletFired = false;
    var bulletList = [];

    mainLoop();
    //mainLoop
    function mainLoop() {

        // Stats update

        coinCount.innerHTML = playerGameInventoryCoinCount;
        carrotCount.innerHTML = playerGameInventoryCarrotCount;


        //
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
        if (playerGameInventoryCoinCount == 9) {
            bulletInventory = 10;
        } if (playerGameInventoryCoinCount == 19) {
            bulletInventory = 20;
        } if (playerGameInventoryCoinCount == 29) {
            bulletInventory = 30;
        } if (playerGameInventoryCoinCount == 39) {
            bulletInventory = 40;
        }




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
            for (var j = 0; j < carrots[i].length; j++) {
                carrots[i][j].xPosition += -player.xSpd;

                if (player.collitionObject(carrots[i][j])) {
                    var thisCarrot = carrots[i].indexOf(carrots[i][j]);
                    carrots[i].splice(thisCarrot, 1);
                    playerGameInventoryCarrotCount++;
                }
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
                    message.innerHTML = "You have " + bulletInventory + " bullets";
                }
            }
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
            for (var j = 0; j < carrots[i].length; j++) {
                ctx.drawImage(carrots[i][j].sprite, carrots[i][j].xPosition, carrots[i][j].yPosition);
            }

        }


        //Lastly rendering the player

        ctx.drawImage(player.sprite, player.xPosition, player.yPosition);
        ctx.drawImage(finnishLine.sprite, finnishLine.xPosition, finnishLine.yPosition);




        if (player.collitionObject(finnishLine)) {
            if (carrots.length != 0) {
                message.innerHTML = "You haven't collected all the carrots";
            } else {

                ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
                playerTotalCarrotCount += playerGameInventoryCarrotCount;
                createWorld();
                console.log(playerTotalCarrotCount + "/" + playerGameInventoryCarrotCount);

            }
        }

        /*
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
         */

        setTimeout(mainLoop, 1000 / 60)
    }


}




function enterLvl1() {
    //Setting the inventory of the player to 0
    var playerGameInventoryCoinCount = 0;
    var playerGameInventoryCarrotCount = 0;


    // Displaying the stats in upper part of the screen
    var gameStats = document.createElement("div");
    gameStats.id = "gameStats";
    gameStats.style.height = "10%";
    gameStats.style.backgroundColor = "orange";
    gameStats.style.display = "flex";
    gameStats.style.flexDirection = "row";
    gameStats.style.flexWrap = "wrap";
    gameStats.style.justifyContent = "space-around";
    var coinCount = document.createElement("p");
    coinCount.className = "text";
    var carrotCount = document.createElement("p");
    carrotCount.className = "text";
    var message = document.createElement("p");
    message.className = "text";


    //Appending all the stats
    gameStats.appendChild(coinCount);
    gameStats.appendChild(message);
    gameStats.appendChild(carrotCount);
    contentEl.appendChild(gameStats);



    //Setings for the player
    var playerName;
    var playerXPosition = canvasEl.width / 2;
    var playerYPosition = canvasEl.height/2;
    var playerWidth = 10;
    var playerHeight = 12;
    var playerYspd = 2;
    var playerGravity = 20;
    var playerWeight = 0.05;
    var playerHp = 100;
    var playerDamage = 5;

    //

    //Making the player
    var player = new entity("img/Small1.png", playerXPosition, playerYPosition, playerWidth, playerHeight, playerYspd, playerGravity, playerWeight, playerHp, playerDamage, playerName)

    //Block information
    var BlockSet = [
        { antallBlokker: 10, xPos: 100, yPos: 100, damage: 0, jump: 0 },
        { antallBlokker: 2, xPos: 400, yPos: 115, damage: 0, jump: 5, speed : 0},
        { antallBlokker: 2, xPos: 480, yPos: 30, damage: 0, speed: 0, jump: 0}
    ]

    //The vlock array which hold all the values of the blocks in game and which fetch information from the BlockSet
    var block = new Array();

    //Creating the ground using the block array and the BlockSet array/objects
    for (var i = 0; i < BlockSet.length; i++) {
        block[i] = new Array();
        for (var j = 0; j < BlockSet[i].antallBlokker; j++) {

            if (BlockSet[i].damage != 0) {
                block[i][j] = new blocks("img/iu.jpg", BlockSet[i].xPos + (j * 20), BlockSet[i].yPos, 20,20);
                block[i][j].damage = BlockSet[i].damage;
            } else if (BlockSet[i].speed != 0) {
                block[i][j] = new blocks("img/iu.jpg", BlockSet[i].xPos + (j * 20), BlockSet[i].yPos, 20,20);
                block[i][j].speed = BlockSet[i].speed;
            } else if (BlockSet[i].jump != 0) {
                block[i][j] = new blocks("img/iu.jpg", BlockSet[i].xPos + (j * 20), BlockSet[i].yPos, 20,20);
                block[i][j].jump = BlockSet[i].jump;
            } else {
                block[i][j] = new blocks("img/iu.jpg", BlockSet[i].xPos + (j * 20), BlockSet[i].yPos, 20,20);

            }
        }
    }


    //Doing the same with the coins as the ground
    var CoinSet = [
        { antallCoins: 20, xPos: 200, yPos: 80 },
        { antallCoins: 5, xPos: 400, yPos: 55 },
        { antallCoins: 2, xPos: 500, yPos: 90 }
    ]


    var playerCoins = new Array();

   
    for (var i = 0; i < CoinSet.length; i++) {
        playerCoins[i] = new Array();

        for (var j = 0; j < CoinSet[i].antallCoins; j++) {
            playerCoins[i][j] = new collectable("img/coin.png", CoinSet[i].xPos + (j * 20), CoinSet[i].yPos, 2, 2);
        }
    }

    //
    //And the carrots
    var CarrotSet = [
        { xPos: 400, yPos: 15 }
        //{ xPos: 500, yPos: 45 }
    ]

    var carrots = new Array();

    
    for (var i = 0; i < CarrotSet.length; i++) {
        carrots[i] = new collectable("img/treasure.png", CarrotSet[i].xPos, CarrotSet[i].yPos, 10, 10)
    }
    //


    //And the enemies, with a more complex system
    var EnemySet = [
        { antallEnemies: 0, xPos: 50, yPos: 30, yspd: 0.5, xspd: 0.5, width:10, height:12, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 100 },
        { antallEnemies: 0, xPos: 200, yPos: 20, yspd: 0.5, xspd: 0.5, width: 10, height:12, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 200 },
        { antallEnemies: 2, xPos: 490, yPos: 15, yspd: 0.5, xspd: 0.5, width: 10, height: 12, gravity: 5, weight: 0.1, currentHp: 5, damage: 0, range: 10 },
    ]

    //Enemy arrays
    var enemies = new Array();
    //Enemies start position array
    var enemyStartXValue = new Array();
    //If they are going left or right
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
            enemies[i][j].startXposition = enemyStartXValue[i][j];

        }

    }


    // Placing the objective
    var finnishLine = new collectable("img/finnishLine.png", 800, 80, 10, 10);



    //If continue game is true, the loop should continue
    var ContiniueGame = true;

    //Creating the bullet logic for the player
    var bulletList = new Array();
    var bulletInventory = 0;
    var bulletFired = false;
    var coolDown = false;
    

    function iscoolingDown() {
        coolDown = false;
    }

    //

    //Cooldown for loosing life
    var isHurting = false;
    var damageCooldown = false;

    function LifeLossCoolDown() {
        damageCooldown = false;
    }
    //


    mainLoop();
<<<<<<< HEAD
=======


>>>>>>> bcba710d548014de455c5ecca3ef9e05e85ef53c
    function mainLoop() {

        var gravity = 0.09;
        // Stats update
        coinCount.innerHTML = playerGameInventoryCoinCount;
        carrotCount.innerHTML = playerGameInventoryCarrotCount;
        //

        //Player logic and saying that the finnish line should be relative to the players xPosition
        player.yPosition += player.ySpd;
        finnishLine.xPosition += -player.xSpd;

        //Player moving logic
        if (left) {
            player.xSpd = -3;
        }
        if (right) {
            player.xSpd = 3;
        }

        if (!left && !right) {
            player.xSpd = 0;
        }

        //Player jumping logic
        if (jump) {
            player.ySpd = -2.5;
            jump = false;
        }

        if (hasRealised && !onGround) {
            player.ySpd += gravity;
        }

        if (player.ySpd < player.gravity) {
            player.ySpd += player.weight;
        }

    
        // Health Logic if player is not on the canvas
        if (player.yPosition > canvasEl.height) {
            player.CurrentHp = 0;
        }


<<<<<<< HEAD
        // Wapon logic and inventory bullet count
        if (playerGameInventoryCoinCount == 10) {
            bulletInventory = 5;
            playerGameInventoryCoinCount = 0;
        }

        //REMEMBER TO IMPLEMENT BULLET COUNT LOGIC
        //where the bullets are created and determed which way it should travel
        //And also setting the cooldown
=======


        // Wapon logic

        if(playerGameInventoryCoinCount == 10) {
            bulletInventory = 10;
        } if (playerGameInventoryCoinCount == 19) {
            bulletInventory = 20;
        } if (playerGameInventoryCoinCount == 29) {
            bulletInventory = 30;
        } if (playerGameInventoryCoinCount == 39) {
            bulletInventory = 40;
        }




>>>>>>> bcba710d548014de455c5ecca3ef9e05e85ef53c
        if (isShooting && !coolDown) {
            bulletFired = true;
            coolDown = true;
            bulletInventory--;
            
            if (left) {
                bulletList.push(new bullets(player.xPosition - 20, player.yPosition, 5, 2, "Left"))
            } else {
                bulletList.push(new bullets(player.xPosition + 20, player.yPosition, 5, 2, "Right"))
            }

            if (coolDown) {
                setTimeout(iscoolingDown, 1000);
            }
        }

<<<<<<< HEAD
       
=======

        //Clearing the screen

        
>>>>>>> bcba710d548014de455c5ecca3ef9e05e85ef53c

        //Keeping track of the bullets

        for (var i = 0; i < bulletList.length; i++){

            if (bulletList[i].direction == "Left"){
                bulletList[i].xPosition += -player.xSpd - bulletList[i].xSpd;


            } else if (bulletList[i].direction == "Right"){
             
                bulletList[i].xPosition += -player.xSpd + bulletList[i].xSpd;
                
            }
        }
    
        


      


        //Keeping track of the ground
        for (var i = 0; i < block.length; i++) {


            for (var j = 0; j < block[i].length; j++) {
                block[i][j].xPosition += -player.xSpd;
                if (player.collitionObject(block[i][j]) && player.yPosition + player.height < block[i][j].yPosition + player.ySpd) {
                    if (block[i][j].damage != 0) {

                        if (!damageCooldown) {
                            player.CurrentHp -= 5;
                            damageCooldown = true;


                            if (damageCooldown) {
                                setTimeout(LifeLossCoolDown, 1000);
                            }
                        }

                        player.ySpd = 0;
                        onGround = true;
                        hasRealised = false;
                        player.yPosition = block[i][j].yPosition - player.height;


                    }
                    else if (block[i][j].jump != 0) {

                        player.ySpd = -block[i][j].jump;
                        onGround = false;
                        hasRealised = true;




                    } else {
                        player.ySpd = 0;
                        onGround = true;
                        hasRealised = false;
                        player.yPosition = block[i][j].yPosition - player.height;

                    }

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
                        if (enemies[i][j].collitionObject(block[k][l]) && enemies[i][j].yPosition + enemies[i][j].height > block[k][l].yPosition /*+ enemies[i][j].ySpd*/) {
                            enemies[i][j].yPosition = block[k][l].yPosition - enemies[i][j].height;

                        }

                    }
                }
                
               

                if (player.collitionObject(enemies[i][j])) {
                    console.log("du rører en fiende");
                    if (!damageCooldown) {
                        player.CurrentHp -= 5;
                        damageCooldown = true;


                        if (damageCooldown) {

                            setTimeout(LifeLossCoolDown, 1000);
                        }
                    }


                }

            }
        }
<<<<<<< HEAD

        /*
        RENDERING SECTION OF THE GAME
        */
=======
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
>>>>>>> bcba710d548014de455c5ecca3ef9e05e85ef53c

        //Clearing the screen
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);  
        
        //rendering the bullets
        for (var i = 0; i < bulletList.length; i++) {
            ctx.fillRect(bulletList[i].xPosition, bulletList[i].yPosition, 5, 5);

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



        //Lastly rendering the player and the finnish line
        ctx.drawImage(player.sprite, player.xPosition, player.yPosition);
        ctx.drawImage(finnishLine.sprite, finnishLine.xPosition, finnishLine.yPosition);
        

        //If the player collides with the finnishLine
        if (player.collitionObject(finnishLine)) {
            if (carrots.length != 0) {
                message.innerHTML = "You haven't collected all the carrots";
            } else {
                ContiniueGame = false;
                var obj = document.getElementById("gameStats");
                obj.parentNode.removeChild(obj);
                ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
                playerTotalCarrotCount += playerGameInventoryCarrotCount;
                createWorld();
                console.log(playerTotalCarrotCount + "/" + playerGameInventoryCarrotCount);

            }
        }

        //If the player is dead or is outside the canvas

        /*
        if (player.CurrentHp <= 0 || player.yPosition > canvasEl.height) {
            ContiniueGame = false;
            var obj = document.getElementById("gameStats");
            obj.parentNode.removeChild(obj);
     
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
     
        }
        */

        //Determening if the loop should go on
        if (ContiniueGame == true) {
            setTimeout(mainLoop, 1000 / 60)
        }
    }


}




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
    stats();
    createWorld();


    function createWorld() {


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



    }



    function loadWorld(e) {
        var worldEl = document.querySelectorAll(".world");
        for (var i = 0; i < worldEl.length; i++) {
            var currentWorld = worldEl[i];
            currentWorld.parentNode.removeChild(currentWorld);
        }

        var curretTarget = e.target;

        if (curretTarget.id === "0") {
            enterLvl1();
        } else if (curretTarget.id === "1") {
            enterLvl2();
        } else if (curretTarget.id === "2") {
            enterLvl3();
        } else if (curretTarget.id === "3") {
            enterLvl4();
        }

    }


*/



enterLvl1();

function enterLvl1() {

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
        { antallEnemies: 4, xPos: 50, yPos: 30, yspd: 2, xspd: 0.5, gravity: 5, weight: 0.1, currentHp: 5, damage: 0 },
        { antallEnemies: 5, xPos: 400, yPos: 30, yspd: 0.5, xspd: 0.5, gravity: 5, weight: 0.1, currentHp: 5, damage: 0 },
        { antallEnemies: 2, xPos: -50, yPos: 30, yspd: 0.5, xspd: 0.5, gravity: 5, weight: 0.1, currentHp: 5, damage: 0 },
    ]

    var enemies = new Array();



    var player = new entity("img/Small1.png", canvasEl.width / 2, 30, 15, 18, 2, 20, 0.05, 100, 4, "Hanna")



    //mainLoop



    var bulletInventory = 10;
    var bulletFired = false;
    var bulletList = [];

    mainLoop();
    function mainLoop() {

        //enemy.startXposition += enemy.xSpd;

        /*
        if (enemy.startXposition == 250) {
            enemy.xSpd = -0.5;
            console.log("hei");
        } else if (enemy.startXposition === 150) {
            enemy.xSpd = 0.5;
            console.log("Hade");
        }
        */

        // saying that the enemies sposition is relative to the player and the world
        // enemy.onScreenXPosition += -player.xSpd + enemy.xPosition; 
        //enemy.xPosition += -player.xSpd + enemy.xSpd;
        //saying that the enemy should have gravity
        //enemy.yPosition += enemy.ySpd;

        //saying that the enemies xPosition should be relative to the enemies speed and shoudl
        //Be located in an area


        player.yPosition += player.ySpd;

        //Pre variable adjustment

        var gravity = 0.09;

        //Logic xPosition and xSpd

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




        //Kollision and gravity


        //if (player.collitionObject(enemy)) {
        //    alert("du tapte");


        //if (player.collitionObject(coin)) {
        //    alert("du fikk en mynt");
        // }





        //Post variable adjustment




        //Clearing the screen

        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

        //Rendering the block
        for (var i = 0; i < BlockSet.length; i++) {
            block[i] = new Array();
            BlockSet[i].xPos += -player.xSpd;

            for (var j = 0; j < BlockSet[i].antallBlokker; j++) {
                block[i][j] = new blocks("img/iu.jpg", BlockSet[i].xPos + (j * 40), BlockSet[i].yPos, 40, 40, 0);
                if (player.collitionObject(block[i][j]) && player.yPosition + player.height < block[i][j].yPosition + player.ySpd) {
                    player.ySpd = 0;
                    onGround = true;
                    hasRealised = false;
                    player.yPosition = block[i][j].yPosition - player.height;

                }
                /*

                if (enemy.collitionObject(block[i][j]) && enemy.yPosition + enemy.height < block[i][j].yPosition + enemy.ySpd) {
                    enemy.ySpd = 0;
                    enemy.yPosition = block[i][j].yPosition - enemy.height;
                }
                */
                ctx.drawImage(block[i][j].sprite, block[i][j].xPosition, block[i][j].yPosition)
            }
        }
        //Rendering the Coins

        for (var i = 0; i < CoinSet.length; i++) {
            playerCoins[i] = new Array();
            CoinSet[i].xPos += -player.xSpd;
            for (var j = 0; j < CoinSet[i].antallCoins; j++) {
                playerCoins[i][j] = new collectable("img/coin.png", CoinSet[i].xPos + (j * 20), CoinSet[i].yPos, 2, 2)
                ctx.drawImage(playerCoins[i][j].sprite, playerCoins[i][j].xPosition, playerCoins[i][j].yPosition);
            }

        }


        //Rendering the Carrots
        for (var i = 0; i < CarrotSet.length; i++) {
            carrots[i] = new Array();
            CarrotSet[i].xPos += -player.xSpd;



            carrots[i] = new collectable("img/treasure.png", CarrotSet[i].xPos, CarrotSet[i].yPos, 2, 2)
            ctx.drawImage(carrots[i].sprite, carrots[i].xPosition, carrots[i].yPosition);



        }


        //Rendering the enemies
        for (var i = 0; i < EnemySet.length; i++) {
            enemies[i] = new Array();
            EnemySet[i].xPos += -player.xSpd;
            EnemySet[i].yPos += EnemySet[i].xspd;
            //enemies[i].startXposition = 0;

            enemies[i].xSpd = 0.5;

            for (var j = 0; j < EnemySet[i].antallEnemies; j++) {
              
                enemies[i][j] = new entity("img/Small1.png", EnemySet[i].xPos + (j * 15), EnemySet[i].yPos, 15, 18, EnemySet[i].yspd, EnemySet[i].gravity, EnemySet[i].weight, EnemySet[i].currentHp, EnemySet[i].damage);
                
                //Koisjon mot hver blokk
                /*
                for(var k = 0; k < BlockSet.length; k++){
                    for(var l = 0; l < BlockSet[i].antallBlokker; l++){
                        if (enemies[i][j].collitionObject(block[k][l]) && enemies[i][j].yPosition + enemies[i][j].height < block[k][l].yPosition + enemies[i][j].ySpd) {
                            enemies[i][j].ySpd = 0;
                            enemies[i][j].yPosition = block[i][j].yPosition - enemies[i][j].height;
                        }
                    }
                }
                */
                


                ctx.drawImage(enemies[i][j].sprite, enemies[i][j].xPosition, enemies[i][j].yPosition)
            }
        }

        //Lastly rendering the player

        ctx.drawImage(player.sprite, player.xPosition, player.yPosition);


        setTimeout(mainLoop, 1000 / 60)


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









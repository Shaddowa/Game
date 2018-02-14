
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
    //Events
    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp)

    var left = false;
    var right = false;
    var space = false;


    function keyDown(e) {


        if (e.keyCode === 37) {
            left = true;
        }
        if (e.keyCode === 39) {
            right = true;
        }

        if (e.keyCode === 32) {
            space = true;
        }
        console.log(e.keyCode, left, right);

    }
    function keyUp(e) {

        if (e.keyCode === 37) {
            left = false;
        }
        if (e.keyCode === 39) {
            right = false;
        }
        if (e.keyCode === 32) {
            space = false;
        }
        console.log(e.keyCode, left, right);

    }


    /*alll koden her */



    var player = new entity("img/Small1.png", canvasEl.width/2, 30, 15, 18, 2, 20, 0.05, 100, 4, "Hanna")
    var enemy = new entity("img/Small1.png",300,10,15,18,2,20,0.1,10,3)
    var coin = new collectable("img/coin.png", 0,60,10,10)

    var maxBlock = 10;
    var block = new Array();


    for (var i = 0; i < maxBlock; i++) {
        block[i] = new blocks("img/iu.jpg", i* canvasEl.width/2, 100, 40, 40, 0)
        console.log(block[i]);
    }



    console.log(canvasEl.height);

    //mainLoop

    mainLoop();
    function mainLoop() {
        
        console.log(player.xPosition);
        //Pre variable adjustment


        //Making the game a side scroller

        for(var i = 0; i < maxBlock; i++)
        {
            block[i].xPosition -= player.xSpd;
            
        }
        enemy.yPosition += enemy.ySpd;
        enemy.xPosition -= player.xSpd;
        coin.xPosition -= player.xSpd;
        player.yPosition += player.ySpd;
        
        


        //Logic xPosition and xSpd

        if (left) {
            player.xSpd = -3;
        }
        if (right) {
            player.xSpd = 3;
        }

        if (space && player.ySpd === 0) {
            player.ySpd = -1.5;
        }


        if (!left && !right) {
            player.xSpd = 0;
        }

        if (player.ySpd < player.gravity) {
            player.ySpd += player.weight;
        }
        
        if(enemy.ySpd < enemy.gravity){
            enemy.ySpd += enemy.weight;
        }


        // Health Logic

        if(player.yPosition > canvasEl.height){
            player.CurrentHp = 0;
        }



        //Kollision and gravity


        for (var i = 0; i < maxBlock; i++) {
            if (player.collitionGround(block[i]) && player.yPosition + player.height < block[i].yPosition + player.ySpd) {
                player.ySpd = 0;
                player.yPosition = block[i].yPosition - player.height;
            }
        }
        for (var i = 0; i < maxBlock; i++) {
            if (enemy.collitionEnemy(block[i]) && enemy.yPosition + enemy.height < block[i].yPosition + enemy.ySpd) {
                enemy.ySpd = 0;
                enemy.yPosition = block[i].yPosition - enemy.height;
            }
        }

        if(player.collitionEnemy(enemy)){
            alert("du tapte");
        }

        if(player.collitionCollectable(coin)){
            alert("du fikk en mynt");
        }


      


        //Post variable adjustment




        //Rendering

        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
        ctx.drawImage(player.sprite, player.xPosition, player.yPosition);
        ctx.drawImage(enemy.sprite,enemy.xPosition, enemy.yPosition);
        ctx.drawImage(coin.sprite,coin.xPosition,coin.yPosition);
        for (var i = 0; i < maxBlock; i++) {
            ctx.drawImage(block[i].sprite, block[i].xPosition, block[i].yPosition);
           
        }
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









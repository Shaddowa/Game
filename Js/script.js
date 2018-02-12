var bodyEl = document.querySelector("body");
var canvasEl = document.getElementById("mittCanvas");
var ctx = canvasEl.getContext("2d");
var startButton = document.getElementById("startGame");
var contentEl = document.querySelector(".content")


startButton.addEventListener("click", startSpill);


function startSpill () {

    var object = document.getElementById("startGame");
    object.parentNode.removeChild(object);

 //All the classes and functions
    var worlds = ["Fire", "Earth", "water", "wind"];
    class world {
        constructor(lvl, biom, name) {

            this.lvl = lvl;
            this.biom = biom;
            this.name = name;

        }
    }

    class entity {
        constructor(xPosition, yPosition, xSpd, ySpd, hp, damage, name, id) {
            this.xPosition = xPosition;
            this.yPosition = yPosition;
            this.xSpd = xSpd;
            this.ySpd = ySpd;
            this.hp = hp;
            this.damage = damage;
            this.name = name;
            this.id = id;
            
            function entityLoss() {
        
                //if the player dies
            }

            function entityWin() {

                //if the player accomplishes the lvl
            }
        }   
    }

    var collectable = {
        hp : 5,
        //color : randomColor,
        //powerUp : randomPowerUp
    }

    var max = 100;
    var yourInventory = 0;

   
    //Where the game logic starts
    createWorld();

    function createWorld(){

        var stats = document.createElement("label");
        stats.style.width = "100%";
        stats.style.textAlign = "center";
        stats.innerHTML = " You currently have " + yourInventory + " / " + max + " collectables";
        contentEl.appendChild(stats);

        var worldEl = document.createElement("div");
        worldEl.style.display = "flex";
        worldEl.style.flexDirection = "row";
        

        for(var i= 0; i < worlds.length; i++){
        
            var thisWorld = new world( i , worlds[i], worlds[i] + "world");
            var divWorld = document.createElement("div"); 
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
   


   function loadWorld(e){

    var curretTarget = e.target;
    
       if(curretTarget.id === "0"){
           console.log("Du er i verden 1");
       } else if( curretTarget.id === "1"){
           console.log("Du er i verden 2");
       }else if( curretTarget.id === "2"){
           console.log("Du er i verden 3");
       }else if(curretTarget.id === "3"){
           console.log("du er i verden 4");
       }
       console.log(curretTarget);
   }

}




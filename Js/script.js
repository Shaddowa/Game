
startButton.addEventListener("click", startSpill);
howToButton.addEventListener("click", displayControls);

function startSpill() {

    var object = document.getElementById("startGame");
    object.parentNode.removeChild(object);
    var object2 = document.querySelector(".button");
    object2.parentNode.removeChild(object2);
    /*Animation cutscene here 






    */
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




    function enterLvl1() {

        /*alll koden her */
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

    function enterBossBattle(){

        /*alll koden her */
    }

}







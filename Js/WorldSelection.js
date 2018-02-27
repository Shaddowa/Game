
var playerTotalCarrotCount = 0;

function createWorld() {
    canvasEl.style.backgroundImage = "url(img/map.png)";

    var stats = document.createElement("label");
    stats.id = "stats";
    stats.style.width = "100%";
    stats.style.textAlign = "center";
    stats.innerHTML = " You currently have " + playerTotalCarrotCount + " / " + 100 + " Carrots";
    contentEl.appendChild(stats);

    //World section


    var worldOne = document.createElement("div");
    worldOne.id = "world1";
    worldOne.className = "world";
    worldOne.style.height = "90px";
    worldOne.style.width = "90px";
    worldOne.style.position = "absolute";
    worldOne.style.top = "65%";
    worldOne.style.left = "19.5%";
    worldOne.style.backgroundColor = "pink";
    worldOne.addEventListener("click", loadWorld)
    contentEl.appendChild(worldOne);
    

    var worldTwo = document.createElement("div");
    worldTwo.id = "world2";
    worldTwo.className = "world";
    worldTwo.style.height = "90px";
    worldTwo.style.width = "90px";
    worldTwo.style.position = "absolute";
    worldTwo.style.top = "25%"
    worldTwo.style.left = "44%"
    worldTwo.style.backgroundColor = "salmon";
    worldTwo.addEventListener("click", loadWorld);
    contentEl.appendChild(worldTwo);

    var worldThree = document.createElement("div");
    worldThree.id = "world3";
    worldThree.className = "world";
    worldThree.style.height = "90px";
    worldThree.style.width = "90px";
    worldThree.style.position = "absolute";
    worldThree.style.top = "50%";
    worldThree.style.left = "61%";
    worldThree.style.backgroundColor = "green";
    worldThree.addEventListener("click", loadWorld);
    contentEl.appendChild(worldThree);

    /*

    for (var i = 0; i < worlds.length; i++) {

    
        var divWorld = document.createElement("div");
        divWorld.className = "world";
        divWorld.style.width = "60px";
        divWorld.style.height = "50px";
        divWorld.style.backgroundColor = "red";
        divWorld.style.margin = "0 auto";
        divWorld.style.marginTop = "20%";
        divWorld.id = thisWorld.lvl;
        divWorld.addEventListener("click", loadWorld);

        
        contentEl.appendChild(worldEl);

    }

}


*/
}

function loadWorld(e) {
    var curretTarget = e.target;
    var worldEl = document.querySelectorAll(".world");
    var obj = document.getElementById("stats");

    if (curretTarget.id === "world1" && playerTotalCarrotCount == 0){
        obj.parentNode.removeChild(obj);
        canvasEl.style.backgroundImage = "none";

        enterLvl1();
       

        for (var i = 0; i < worldEl.length; i++) {
            var currentWorld = worldEl[i];
            currentWorld.parentNode.removeChild(currentWorld);
        }


    } else if (curretTarget.id === "world2" && playerTotalCarrotCount == 2){
        canvasEl.style.backgroundImage = "none";
        obj.parentNode.removeChild(obj);
        enterLvl2();
        

        for (var i = 0; i < worldEl.length; i++) {
            var currentWorld = worldEl[i];
            currentWorld.parentNode.removeChild(currentWorld);
        }

    } else if (curretTarget.id === "world3" && playerTotalCarrotCount == 4){
        canvasEl.style.backgroundImage = "none";
        obj.parentNode.removeChild(obj);
        enterLvl3();
       

        for (var i = 0; i < worldEl.length; i++) {
            var currentWorld = worldEl[i];
            currentWorld.parentNode.removeChild(currentWorld);
        }
    }

}


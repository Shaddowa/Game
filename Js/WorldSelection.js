
var playerTotalCarrotCount = 0;

function createWorld() {
    canvasEl.style.backgroundImage = "url(img/map.png)";
   
    

    var stats = document.createElement("label");
    stats.id = "stats";
    stats.className = "text";
    stats.style.width = "100%";
    stats.innerHTML = " You currently have " + playerTotalCarrotCount + " / " + 100 + " Carrots";
    contentEl.appendChild(stats);

    //World section


    var worldOne = document.createElement("div");
    worldOne.id = "world1";
    worldOne.className = "world";
    worldOne.style.height = "100px";
    worldOne.style.width = "100px";
    worldOne.style.position = "absolute";
    worldOne.style.top = "67%";
    worldOne.style.left = "19.8%";
    worldOne.style.backgroundColor = "purple";
    worldOne.style.border = "2px solid black";
    worldOne.style.borderRadius = "50%";
    var pEl1 = document.createElement("p");
    pEl1.innerHTML = "<i>WORLD 1</i>"
    pEl1.style.cursor = "default";
    pEl1.className = "text";
    pEl1.style.color = "salmon";
    pEl1.style.textShadow = "2px 2px black";
    worldOne.appendChild(pEl1);
    worldOne.addEventListener("click", loadWorld)
    contentEl.appendChild(worldOne);
    

    var worldTwo = document.createElement("div");
    worldTwo.id = "world2";
    worldTwo.className = "world";
    worldTwo.style.height = "100px";
    worldTwo.style.width = "100px";
    worldTwo.style.position = "absolute";
    worldTwo.style.top = "25%"
    worldTwo.style.left = "44%"
    worldTwo.style.backgroundColor = "pink";
    worldTwo.style.border = "2px solid black";
    worldTwo.style.borderRadius = "50%";
    var pEl2 = document.createElement("p");
    pEl2.innerHTML = "<i>WORLD 2</i>"
    pEl2.style.cursor = "default";
    pEl2.className = "text";
    pEl2.style.color = "salmon";
    pEl2.style.textShadow = "2px 2px black";
    worldTwo.appendChild(pEl2);
    worldTwo.addEventListener("click", loadWorld);
    contentEl.appendChild(worldTwo);

    var worldThree = document.createElement("div");
    worldThree.id = "world3";
    worldThree.className = "world";
    worldThree.style.height = "100px";
    worldThree.style.width = "100px";
    worldThree.style.position = "absolute";
    worldThree.style.top = "50%";
    worldThree.style.left = "61%";
    worldThree.style.backgroundColor = "green";
    worldThree.style.border = "2px solid black";
    worldThree.style.borderRadius = "50%";
    var pEl3 = document.createElement("p");
    pEl3.innerHTML = "<i>WORLD 3</i>"
    pEl3.style.cursor = "default";
    pEl3.className = "text";
    pEl3.style.color = "salmon";
    pEl3.style.textShadow = "3px 3px black";
    worldThree.appendChild(pEl3);
    worldThree.addEventListener("click", loadWorld);
    contentEl.appendChild(worldThree);

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


    } else if (curretTarget.id === "world3" && playerTotalCarrotCount == 2){
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


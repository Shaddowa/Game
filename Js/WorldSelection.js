
var playerTotalCarrotCount = 0;

function createWorld() {
    canvasEl.style.backgroundImage = "url(img/map.png)";
    
 

    var stats = document.createElement("label");
    stats.id = "stats";
    stats.className = "text";
    stats.style.width = "100%";
    stats.innerHTML = " You currently have " + playerTotalCarrotCount + " / " + 10 + " Carrots";
    contentEl.appendChild(stats);

    //World section

    var worldOne = document.createElement("div");
    worldOne.id = "world1";
    worldOne.className = "world";
    worldOne.style.height = "100px";
    worldOne.style.width = "100px";
    worldOne.style.position = "absolute";
    worldOne.style.top = "75%";
    worldOne.style.left = "6.8%";
    worldOne.style.backgroundColor = "purple";
    worldOne.style.border = "2px solid black";
    worldOne.style.borderRadius = "50%";
    var pEl1 = document.createElement("p");
    pEl1.innerHTML = "<i>WORLD 1</i>"
    pEl1.style.cursor = "default";
    pEl1.className = "text";
    pEl1.style.color = "salmon";
    pEl1.style.textShadow = "2px 2px black";
    pEl1.style.position = "absolute";
    pEl1.style.top = "70%";
    pEl1.style.left = "6%";

    worldOne.addEventListener("click", loadWorld)
    contentEl.appendChild(worldOne);
    contentEl.appendChild(pEl1);


    var worldTwo = document.createElement("div");
    worldTwo.id = "world2";
    worldTwo.className = "world";
    worldTwo.style.height = "100px";
    worldTwo.style.width = "100px";
    worldTwo.style.position = "absolute";
    worldTwo.style.top = "20%"
    worldTwo.style.left = "40.5%"
    worldTwo.style.backgroundColor = "pink";
    worldTwo.style.border = "2px solid black";
    worldTwo.style.borderRadius = "50%";
    var pEl2 = document.createElement("p");
    pEl2.innerHTML = "<i>WORLD 2</i>"
    pEl2.style.cursor = "default";
    pEl2.className = "text";
    pEl2.style.color = "salmon";
    pEl2.style.textShadow = "2px 2px black";
    pEl2.style.position = "absolute";
    pEl2.style.top = "12%";
    pEl2.style.left = "40.5%";
    worldTwo.addEventListener("click", loadWorld);
    contentEl.appendChild(worldTwo);
    contentEl.appendChild(pEl2);

    var worldThree = document.createElement("div");
    worldThree.id = "world3";
    worldThree.className = "world";
    worldThree.style.height = "100px";
    worldThree.style.width = "100px";
    worldThree.style.position = "absolute";
    worldThree.style.top = "50%";
    worldThree.style.left = "64%";
    worldThree.style.backgroundColor = "green";
    worldThree.style.border = "2px solid black";
    worldThree.style.borderRadius = "50%";
    var pEl3 = document.createElement("p");
    pEl3.innerHTML = "<i>WORLD 3</i>"
    pEl3.style.cursor = "default";
    pEl3.className = "text";
    pEl3.style.color = "salmon";
    pEl3.style.textShadow = "2px 2px black";
    pEl3.style.position = "absolute";
    pEl3.style.top = "45%";
    pEl3.style.left = "63%";
    worldThree.addEventListener("click", loadWorld);
    contentEl.appendChild(worldThree);
    contentEl.appendChild(pEl3);

}

function loadWorld(e) {
    
    canvasEl.style.backgroundImage = "none";

    var curretTarget = e.target;
    var obj = document.getElementById("stats");
    obj.parentNode.removeChild(obj);

    var worldEl = document.querySelectorAll(".world");
    var textEl = document.querySelectorAll(".text")

   
    for (var i = 0; i < worldEl.length; i++) {
        var currentWorld = worldEl[i];
        currentWorld.parentNode.removeChild(currentWorld);
    }

    for(var j = 0; j< textEl.length; j++){
        var currentText = textEl[j];
        currentText.parentNode.removeChild(currentText);
    }
    
    if (curretTarget.id === "world1" && playerTotalCarrotCount == 0){
        new Audio('audio/ping.mp3').play();
        mainMusic.pause();
        enterLvl1();

    } else if (curretTarget.id === "world2" && playerTotalCarrotCount == 3){
        new Audio('audio/ping.mp3').play();
        mainMusic.pause();
        
        enterLvl2();


    } else if (curretTarget.id === "world3" && playerTotalCarrotCount == 10){
        mainMusic.pause();
        new Audio('audio/ping.mp3').play();
    
        enterLvl3();

    }
}


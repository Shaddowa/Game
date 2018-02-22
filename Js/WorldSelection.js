
var playerTotalCarrotCount = 0;

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
        divWorld.style.margin = "0 auto";
        divWorld.style.marginTop = "20%";
        divWorld.id = thisWorld.lvl;
        divWorld.addEventListener("click", loadWorld);

        worldEl.appendChild(divWorld);
        contentEl.appendChild(worldEl);

    }

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


    } else if (curretTarget.id === "1" && playerTotalCarrotCount == 2) {
        enterLvl2();
        obj.parentNode.removeChild(obj);

        for (var i = 0; i < worldEl.length; i++) {
            var currentWorld = worldEl[i];
            currentWorld.parentNode.removeChild(currentWorld);
        }
    } else if (curretTarget.id === "2" && playerTotalCarrotCount == 4) {
        enterLvl3();
        obj.parentNode.removeChild(obj);

        for (var i = 0; i < worldEl.length; i++) {
            var currentWorld = worldEl[i];
            currentWorld.parentNode.removeChild(currentWorld);
        }
    }

}


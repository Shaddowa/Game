function displayControls(){

    var object = document.getElementById("startGame");
    var object2 = document.querySelector(".button");
    object.parentNode.removeChild(object);
    object2.parentNode.removeChild(object2);
    returnButton.className = "button";
    returnButton.innerHTML = "Return";
    returnButton.style.margin = "0";
    returnButton.style.position = "absolute";
    returnButton.style.left = "38%";
    returnButton.style.top = "92%";
    contentEl.appendChild(returnButton)

    returnButton.addEventListener("click", goBack);

    function goBack(){
        location.reload();
    }
    
}

function stats(){ 
    var stats = document.createElement("label");
    stats.style.width = "100%";
    stats.style.textAlign = "center";
    stats.innerHTML = " You currently have " + collectable.Current + " / " + collectable.Total + " collectables";
    contentEl.appendChild(stats);


    if(collectable.Current === collectable.total){
        enterBossBattle();
    }
}
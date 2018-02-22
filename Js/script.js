
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

    //Statssection



    createWorld();


}

function displayControls() {

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

    // Telling the controlls
    contentEl.style.display = "flex";
    var SectionControlsLeftRight = document.createElement("div");
    SectionControlsLeftRight.style.display = "flex";
    SectionControlsLeftRight.style.justifyContent = "space-around";
    var ControlLeftRightText = document.createElement("p");
    ControlLeftRightText.style.fontSize = "50px";
    var PictureLeftRight = document.createElement("img");
    PictureLeftRight.src = "img/arrowKeys.png";
    ControlLeftRightText.innerHTML = "Use arrow keys to move";


    var SectionJump = document.createElement("div");
    SectionJump.style.display = "flex";
    SectionJump.style.justifyContent = "space-around";
    var jumpText = document.createElement("p");
    jumpText.style.fontSize = "50px";
    jumpText.innerHTML = "Use up arrow to jump";
    var PictureJump = document.createElement("img");
    PictureJump.src = "img/up.png";

    var SectionShoot = document.createElement("div");
    SectionShoot.style.display = "flex";
    SectionShoot.style.justifyContent = "space-around";
    var shootText = document.createElement("p");
    shootText.style.fontSize = "50px";
    shootText.innerHTML = "Use spacebar to shoot";
    var pictureShoot = document.createElement("img");
    pictureShoot.src = "img/space.png";


    contentEl.appendChild(SectionControlsLeftRight);
    SectionControlsLeftRight.appendChild(ControlLeftRightText);
    SectionControlsLeftRight.appendChild(PictureLeftRight);

    contentEl.appendChild(SectionJump);
    SectionJump.appendChild(jumpText);
    SectionJump.appendChild(PictureJump);

    contentEl.appendChild(SectionShoot);
    SectionShoot.appendChild(shootText);
    SectionShoot.appendChild(pictureShoot);


    //

    function goBack() {
        location.reload();
    }

}








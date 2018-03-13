var mainMusic = new Audio('audio/firstscreen.mp3');
mainMusic.loop = true;
mainMusic.volume = 0.3;
mainMusic.play();

canvasEl.style.backgroundRepeat = "no-repeat";
canvasEl.style.backgroundPosition = "center";

startButton.addEventListener("click", startSpill);
howToButton.addEventListener("click", displayControls);


function startSpill() {
    new Audio('audio/ping.mp3').play();
    contentEl.style.backgroundImage = "none";
    var object = document.getElementById("startGame");
    object.parentNode.removeChild(object);
    var object2 = document.querySelector(".button");
    object2.parentNode.removeChild(object2);
    
   
    showStory();

    function showStory(){
        var clicks = 0;
        window.addEventListener("click", changeSlide);
    
        function changeSlide(){
            if(clicks == 0){
                new Audio('audio/ping.mp3').play();
                contentEl.style.backgroundImage = "url(img/game.png)";
                clicks++;
            } else if(clicks == 1){
                new Audio('audio/ping.mp3').play();
                contentEl.style.backgroundImage = "url(img/goal.png)";
                clicks++;
                
            } else if(clicks == 2){
                new Audio('audio/ping.mp3').play();
                contentEl.style.backgroundImage = "none";
                window.removeEventListener("click", changeSlide);
                createWorld();
            }
        }
        

    }
    
    //Where the game logic starts

    //Statssection



    


}

function displayControls() {
    new Audio('audio/ping.mp3').play();

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
    SectionControlsLeftRight.style.width = "35%";
    SectionControlsLeftRight.style.margin = "0 auto";
    SectionControlsLeftRight.style.flexDirection = "column";
    var ControlLeftRightText = document.createElement("p");
    ControlLeftRightText.className = "text";
    ControlLeftRightText.style.color = "red";
    SectionControlsLeftRight.style.textShadow = "2px 2px black";
    var PictureLeftRight = document.createElement("img");
    PictureLeftRight.style.width = "70%";
    PictureLeftRight.src = "img/piltaster.jpg";
    ControlLeftRightText.innerHTML = "Use arrow keys to move";


    var SectionJump = document.createElement("div");
    SectionJump.style.display = "flex";
    SectionJump.style.width = "25%";
    SectionJump.style.margin = "0 auto";
    SectionJump.style.flexDirection = "column";
    var jumpText = document.createElement("p");
    jumpText.className = "text";
    jumpText.style.color = "red";
    jumpText.style.textShadow = "2px 2px black";
    jumpText.innerHTML = "Use up arrow to jump";
    var PictureJump = document.createElement("img");
    PictureJump.src = "img/oppover.jpg";
    PictureJump.style.width = "40%";

    var SectionShoot = document.createElement("div");
    SectionShoot.style.display = "flex";
    SectionShoot.style.width = "20%";
    SectionShoot.style.margin = "0 auto";
    SectionShoot.style.flexDirection = "column";
    SectionShoot.style.justifyContent = "space-around";
    var shootText = document.createElement("p");
    shootText.style.color ="red";
    shootText.style.textShadow = "2px 2px black";
    shootText.className = "text";
    shootText.innerHTML = "Use spacebar to shoot";
    var pictureShoot = document.createElement("img");
    pictureShoot.src = "img/space.jpg";


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

    function goBack(){
        
        location.reload();
    }

}








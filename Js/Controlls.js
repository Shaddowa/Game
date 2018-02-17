var bodyEl = document.querySelector("body");
var canvasEl = document.getElementById("mittCanvas");
var ctx = canvasEl.getContext("2d");
var startButton = document.getElementById("startGame");
var contentEl = document.querySelector(".content")
var howToButton = document.querySelector(".button");
var returnButton = document.createElement("button");


//Events
window.addEventListener("keydown", keyDown);
window.addEventListener("keyup", keyUp)


var left = false;
var right = false;
var jump = false;
var onGround ;
var hasRealised;

function keyDown(e) {

   


    if (e.keyCode === 37) {
        left = true;
    }
    if (e.keyCode === 39) {
        right = true;
    }

    if (e.keyCode === 38 && onGround === true) {
        
        jump = true;
        onGround = false;

    }


    

}
function keyUp(e) {

    if (e.keyCode === 37) {
        left = false;
    }
    if (e.keyCode === 39) {
        right = false;
    }
    if(e.keyCode === 38){
        hasRealised = true;
    }
}


/*
This script is part of the assignment studio 3 for
 DES 157 - Interactive Media II class at UC Davis.

 02/12/19
 Jean Menezes
 */


"use strict";

// send a message to the console
console.log("reading js");

var pixel = document.querySelector("#pixel");
var pixelW = pixel.offsetWidth; // width of pixel
var pixelH = pixel.offsetHeight; // height of pixel
var section = document.querySelector("section");
var sectionW // for width of section, updated in moveDiv
var sectionH // height of section, updated in moveDiv
var score = document.querySelector("#score");
var scoreCount = 0; // beginning score
var timeLeft = document.querySelector("#timeLeft");
var count = 14; // for the time remaining, starts at 30
var reset = document.querySelector("#stop");
var gameOverImg = document.querySelector('#gameOverImg');

var gameOverAnim; // animation
var gameOverX = -200; // x position of graphic

var pixelInterval = setInterval(moveDiv, 2000); // change the second parameter to move the pixel faster/slower

var countInterval = setInterval(countDown, 1000); // to display Time Remaining

var timerId = setTimeout(gameOver, 1000 * count); // to end the game when the time limit is reached

// bind click eventListener to pixel with a custom callback function
pixel.addEventListener('click', updateScore);

// bind click eventListener to reset with a custom callback function
reset.addEventListener('click', resetGame);

// creating a mousedown for image click

var looseTrump=document.getElementById('pixel');
var pressedTrump=document.getElementById('pixelPushed');

looseTrump.addEventListener('mousedown', function() {
  looseTrump.style.opacity=1;
  looseTrump.src="../studio3/images/headPressed.png"
});

looseTrump.addEventListener('mouseup', function() {
  looseTrump.style.opacity=1;
  looseTrump.src="../studio3/images/headUnpressed.png"
});


// moveDiv moves the pixel randomly with the area of the section
function moveDiv() {
    pixel.style.display = 'block';
  // get section width and height
  sectionW = section.offsetWidth; // width of section
  sectionH = section.offsetHeight; // height of section

  // console.log('sectionW: ' + sectionW + '; sectionH: ' + sectionH);

  // get random values for new position with 'px' for the css
  // The Math.random() method generates a random number between 0 and almost 1
  // The Math.floor() method rounds a number downwards to the nearest integer
  var newLeft = Math.floor(Math.random() * (sectionW - pixelW)) + "px";
  var newTop = Math.floor(Math.random() * (sectionH - pixelH)) + "px";

  // update pixel location
  pixel.style.left = newLeft;
  pixel.style.top = newTop;
}

// updateScore updates the scoreCount and adds the score to the UI
function updateScore() {
  scoreCount++;
  score.innerHTML = "Score: " + scoreCount;
}

// update the time remaining and display in UI
function countDown() {
  count = count - 1; // same as count--
  section.style.opacity = count * .075; // darken the screen
  timeLeft.innerHTML = "Time Remaining: " + count; // show remaining time on screen
  if (timeLeft < 10)  {
    score.style.color = red;
  }
}

// show an alert with the score and clear the timeout and reset the game
function gameOver() {
  timeLeft.innerHTML = "Time Remaining: 0";
  // alert("Game Over! Your score is " + scoreCount);
  // resetGame();
  playGameOverAnim();
}

// play animation around viewport
/*
    prompt 01: define the function playGameOverAnim() with the following:
              a. clear both intervals and timeout
              b. hide pixel so users don't click on it anymore
              c. display game over graphic
              d. animate position of game over graphic
                 1. add a condition that checks if game over graphic is at right edge (reset graphic to left edge)
                 2. update game over graphic x position by 2 pixels
              e. add a recursive call back to the playGameOverAnim function
}
*/

function playGameOverAnim(){
  // clear intervals and timeout in case user
  // resets before timeout is reached
  clearInterval (pixelInterval);
  clearInterval (countInterval);
  clearTimeout (timerId);

 // turn on game over graphic
  gameOverImg.style.display = 'block';

  // check right edge and move gameOverImg
  if (gameOverX < sectionW){
  gameOverX+=2;
  } else {
    gameOverX = -200;
  }
  gameOverImg.style.left = gameOverX + 'px';

  // recursive call back to the same function
  gameOverAnim = requestAnimationFrame(playGameOverAnim);
}



// reset all variables and UI features
function resetGame() {
  // console.log("reset");


  // clear intervals, timeout and animation
  clearInterval(pixelInterval);
  clearInterval(countInterval);
  clearTimeout(timerId);

  // prompt 02: cancel the animation frame for gameOverAnim

  gameOverImg.style.display = "none";
  cancelAnimationFrame (gameOverAnim);

  // reset scoreCount, count, gameOverX and pixel
  scoreCount = 0;
  count = 10;
  gameOverX = -200;
  pixel.style.display = 'block';

  // update interface
  timeLeft.innerHTML = "Time Remaining: " + count;
  score.innerHTML = "Score: " + scoreCount;
  section.style.opacity = 1;

  // start intervals and timer again
  pixelInterval = setInterval(moveDiv, 1000);
  countInterval = setInterval(countDown, 1000);
  timerId = setTimeout(gameOver, 1000 * count);
}

//adding fullscreen button
var fullS = document.querySelector("#fullScreen");
fullS.addEventListener("click", requestFullScreen);

function requestFullScreen() {
  var body = document.querySelector('body');
  // expand section height
  section.style.height = '70%';
  fullS.style.display = "none";

  // going fullscreen. supports most browsers and their versions
  var requestMethod =
    body.requestFullScreen ||
    body.webkitRequestFullScreen ||
    body.mozRequestFullScreen ||
    body.msRequestFullScreen;

  if (requestMethod) {
    // native full screen
    requestMethod.call(body);
  } else if (typeof window.ActiveXObject !== "undefined") {
    // older IE
    var wscript = new ActiveXObject("WScript.Shell");

    if (wscript !== null) {
      wscript.SendKeys("{F11}");
    }
  }
}

//  bind a listener to the document for fullscreenchange
// to reset section height and to show fullScrren button
document.addEventListener('fullscreenchange', exitHandler);
document.addEventListener('webkitfullscreenchange', exitHandler);
document.addEventListener('mozfullscreenchange', exitHandler);
document.addEventListener('MSFullscreenChange', exitHandler);

function exitHandler() {
  console.log('exitHandler');
  if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {

    fullS.style.display = 'inline';
    section.style.height = '320px';
  }
}

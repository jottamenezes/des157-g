/*
This script is part of the assignment studio 3 for
 DES 157 - Interactive Media II class at UC Davis.

 02/12/19
 Jean Menezes
 */


"use strict";

// send a message to the console
console.log("reading js");




//selecting eyes and bg
var eyes = document.querySelector(".eyes");
var eyeBall = document.getElementsByClassName('ball');




// changing image on click
var sleepMe = document.querySelector('#sleepMe');
var awakeMe = document.querySelector('#awakeMe');
var titleLink = document.querySelector('h1');

sleepMe.addEventListener('click', function() {
  sleepMe.src = "images/meAwake.svg"

  openEye();
});

titleLink.addEventListener('mouseover', function() {
  sleepMe.src = "images/meAtSleep.svg"
    eyes.style.display = 'none';

});


function openEye() {

  console.log("eyemov func");
  eyes.style.display = 'block';


}


document.onmousemove = function(){
  var x = event.clientX * 100 / window.innerWidth + "%";
  var y = event.clientY * 100 / window.innerHeight + "%";
  //event.clientX => get the horizontal coordinate of the mouse
  //event.clientY => get the Vertical coordinate of the mouse
  //window.innerWidth => get the browser width
  //window.innerHeight => get the browser height

  for(var i=0;i<2;i++){
    eyeBall[i].style.left = x;
    eyeBall[i].style.top = y;
    eyeBall[i].style.transform = "translate(-"+x+",-"+y+")";
  }
}

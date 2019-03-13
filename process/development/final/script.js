/*
This script is part of the assignment studio 3 for
 DES 157 - Interactive Media II class at UC Davis.

 02/12/19
 Jean Menezes
 */
/*
This script is part of the assignment studio 3 for
 DES 157 - Interactive Media II class at UC Davis.

 02/12/19
 Jean Menezes
 */


"use strict";

// send a message to the console
console.log("reading js");


particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.json loaded...');
    textBox.style.display = "block";
});






// getting Hover for aesthetics

var hoverCard1 = document.querySelector('#aesthetics');
var img1 = document.querySelector('#imgCard1');
var titleLink = document.querySelector('h1');
var textBox = document.querySelector('.textBox');




hoverCard1.addEventListener('mouseover', function() {

    img1.src = "images/aestheticsBGHover.png";

    img1.style.opacity = 1;

      textBox.style.display = "block";

      textBox.style.left = "70px";


  textBox.style.opacity = "1";


});


hoverCard1.addEventListener('mouseout', function() {
  textBox.style.left = "50px",


    textBox.style.opacity = "1",


  img1.src = "images/aestheticsBG.png"

img1.style.opacity = 0.7;
});

hoverCard1.addEventListener('click', function() {
  textBox.style.left = "50px",

textBox.style.display = "none";
    textBox.style.opacity = "1",


  img1.src = "images/aestheticsBG.png"


});
// function toggleImages() {
//
//   if (img1.src === "images/aestheticsBGHover") {
//     img1.animate([
//   // keyframes
//   { transform: 'translateX(0px)' },
//   { transform: 'translateX(30px)' },
//   {opacity: '0'},
//   {opacity: '1'},
// ], {
//   // timing options
//   duration: 1000,
//   iterations: 1,
// });
//
//
//   } else {
//
//
//   }
// }

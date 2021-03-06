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
var hoverCard2 = document.querySelector('#metaphysics');
var hoverCard3 = document.querySelector('#epistemology');
var hovercard4 = document.querySelector('#ethics');
var hovercard5 = document.querySelector('#logic');

var img1 = document.querySelector('#imgCard1');
var img2 = document.querySelector('#imgCard2');
var img3= document.querySelector('#imgCard3');
var img4= document.querySelector('#imgCard4');
var img5= document.querySelector('#imgCard5');


var textBox = document.querySelector('.textBox');
var sectionTitle = document.querySelector('.cardTitle');
var sectionDescription = document.querySelector('.cardInfo');

sectionTitle.innerHTML = "Aesthetics";
sectionDescription.innerHTML = "The greatest questions we dared to ask, what is Beauty? Is it really on the eye of the beholder?";

// CARDS TRANSITIONS

//CARD 1

img1.addEventListener('mouseover', function() {
  sectionTitle.innerHTML = "Aesthetics";
  sectionDescription.innerHTML = "The greatest questions we dared to ask, what is Beauty? Is it really on the eye of the beholder?";

});


hoverCard1.addEventListener('mouseover', function() {
  img1.src = "images/aestheticsBGHover.png";
  img1.style.opacity = 1;
  textBox.style.display = "block";
  textBox.style.left = "100px";
  textBox.style.opacity = "1";

});

hoverCard1.addEventListener('mouseout', function() {


  textBox.style.left = "70px",
    textBox.style.opacity = "0",
    img1.src = "images/aestheticsBG.png"
  img1.style.opacity = 0.7;
});

hoverCard1.addEventListener('click', function() {
  textBox.style.left = "100px",
    textBox.style.display = "none";
  textBox.style.opacity = "1",
    img1.src = "images/aestheticsBG.png"


});


//CARD 2

img2.addEventListener('mouseover', function() {
  sectionTitle.innerHTML = "Metaphysics";
  sectionDescription.innerHTML = "The greatest questions we dared to ask, what is the Self? What is a Homunculus?";

});


hoverCard2.addEventListener('mouseover', function() {

  img2.src = "images/metaphysicsBGHover.png";
  img2.style.opacity = 1;
  textBox.style.display = "block";
  textBox.style.left = "1140px";
  textBox.style.opacity = "1";

});

hoverCard2.addEventListener('mouseout', function() {
  textBox.style.left = "1110px",
    textBox.style.opacity = "0",
    img2.src = "images/metaphysicsBG.png"
  img2.style.opacity = 0.7;
});

hoverCard2.addEventListener('click', function() {


    img2.src = "images/metaphysicsBG.png"
    textBox.style.display = "none";

});




//CARD 3

img3.addEventListener('mouseover', function() {
  sectionTitle.innerHTML = "Epistemology";
  sectionDescription.innerHTML = "The greatest questions we dared to ask, what is to know? How can we know that we do so?";

});


hoverCard3.addEventListener('mouseover', function() {

  img3.src = "images/epistemologyBGHover.png";
  img3.style.opacity = 1;
  textBox.style.display = "block";
  textBox.style.left = "2200px";
  textBox.style.opacity = "1";

});

hoverCard3.addEventListener('mouseout', function() {
  textBox.style.left = "2170px",
    textBox.style.opacity = "0",
    img3.src = "images/epistemologyBG.png"
  img3.style.opacity = 0.7;
});

hoverCard3.addEventListener('click', function() {


  img3.src = "images/epistemologyBG.png"
    textBox.style.display = "none";

});


//CARD 4

img4.addEventListener('mouseover', function() {
  sectionTitle.innerHTML = "Ethics";
  sectionDescription.innerHTML = "The greatest questions we dared to ask, what is the right thing to do? Is there an universal right way to live?";

});


hovercard4.addEventListener('mouseover', function() {

  img4.src = "images/EthicsBGHover.png";
  img4.style.opacity = 1;
  textBox.style.display = "block";
  textBox.style.left = "3240px";
  textBox.style.opacity = "1";

});

hovercard4.addEventListener('mouseout', function() {
  textBox.style.left = "3210px",
    textBox.style.opacity = "0",
    img4.src = "images/EthicsBG.png"
  img4.style.opacity = 0.7;
});

hovercard4.addEventListener('click', function() {


  img4.src = "images/EthicsBG.png"
    textBox.style.display = "none";

});



//CARD 4

img5.addEventListener('mouseover', function() {
  sectionTitle.innerHTML = "Logic";
  sectionDescription.innerHTML = "The greatest questions we dared to ask, what is reason? Is there a a reason to live rationaly?";

});


hovercard5.addEventListener('mouseover', function() {

  img5.src = "images/logicBGHover.png";
  img5.style.opacity = 1;
  textBox.style.display = "block";
  textBox.style.left = "4300px";
  textBox.style.opacity = "1";

});

hovercard5.addEventListener('mouseout', function() {
  textBox.style.left = "4170px",
    textBox.style.opacity = "0",
    img5.src = "images/logicBG.png"
  img5.style.opacity = 0.7;
});

hovercard5.addEventListener('click', function() {


  img5.src = "images/logicBG.png"
    textBox.style.display = "none";

});

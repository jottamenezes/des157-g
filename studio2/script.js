/*
This script is part of the assignment studio 2 for
 DES 157 - Interactive Media II class at UC Davis.

 02/10/19
 Jean Menezes
 */



'use strict';

var img1 = document.querySelector('#img1');
var closeButton = document.querySelector('#closeButton');

img1.addEventListener('click', function () {
  console.log('mousedown on button');
  img1.style.opacity="0.07";
  txt1.style.display= "block";
    closeButton.style.display="block";
    closeButton.style.left = "280px";
  closeButton.style.top = "80px";

});


var img2 = document.querySelector('#img2');

img2.addEventListener('click', function () {
  console.log('mousedown on button');
  img2.style.opacity="0.07";
  txt2.style.display= "block";
  closeButton.style.display="block";
    closeButton.style.left = "280px";
  closeButton.style.top = "500px";

});


var close = document.getElementById('closeButton');

close.addEventListener('click', function(){
  close.style.display="none";
  img1.style.opacity="1";
  img2.style.opacity="1";
  txt1.style.display= "none";
  txt2.style.display= "none";
})

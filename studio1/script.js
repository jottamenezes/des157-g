/*
This script is part of the assignment studio 1 for
 DES 157 - Interactive Media II class at UC Davis.

 01/27/19
 Jean Menezes
 */



'use strict';


document.querySelector('#create').onclick = processForm;
document.querySelector("#reset").onclick = resetForm;

//define process function
function processForm() {
  console.log('runningProcess');

  document.getElementById("mySpeech").style.visibility = "visible";


  // capturing user valur through querySelector

  var userCountry = document.querySelector("#userCountry").value;
  var userMovie = document.querySelector("#dMovie").value;
  var movHero1 = document.querySelector("#movHero1").value;
  var otherMovie = document.querySelector("#otherMovie").value;
    var otherMovieVillain = document.querySelector("#otherMovieVillain").value;
  var marvelCharacter = document.querySelector("#marvelCharacter").value;
  var movHero2 = document.querySelector("#movHero2").value;
  var festiveHoliday = document.querySelector("#festiveHoliday").value;

  // caputre mySpeech
  var mySpeech = document.querySelector("#mySpeech");
  var msgSection = document.querySelector("#tweet");


  mySpeech.innerHTML =
    "I would be willing to 'shut down' government if <span class='userOutput'>" +  userCountry + "</span> do not give us <span class='userOutput'>" + userMovie +
    "</span>  which includes the <span class='userOutput'>" +  movHero1 + "</span> ! Must get rid of <span class='userOutput'>" + otherMovie + "</span>, <span class='userOutput'>" + otherMovieVillain +  "</span> , & <span class='userOutput'>" + marvelCharacter + "</span> . We need <span class='userOutput'>"
+ movHero2 + "</span>  coming to our <span class='userOutput'>" + festiveHoliday + "</span> !"


  // // prevent page from reloading
  return false;
}


function resetForm() {
  document.getElementById('myForm').reset();

  document.getElementById("mySpeech").style.visibility = "hidden";


}

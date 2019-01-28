/*
This script is part of the assignment studio 1 for
 DES 157 - Interactive Media II class at UC Davis.

 01/27/19
 Jean Menezes
 */



'use strict';


document.querySelector('#create').onclick = processForm;
// document.querySelector("#r").onclick = resetForm;

//define process function
function processForm() {
  console.log('runningProcess');

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
  var myMsg = document.querySelector("#mySpeech");
  var msgSection = document.querySelector("#tweet");


  mySpeech.innerHTML =
    "I would be willing to 'shut down' government if <span style='font-weight: 600; font-size: 1.1em; color:#66a8de'>" +  userCountry + "</span> do not give us " + userMovie +
    " which includes the " +  movHero1 + "!  Must get rid of " + otherMovie + " ," + otherMovieVillain +  ", & " + marvelCharacter + ". We need "
+ movHero2 + " coming to our " + festiveHoliday + "!"


  // // prevent page from reloading
  return false;
}

function resetForm() {
  msgSection.className = "hide";
}

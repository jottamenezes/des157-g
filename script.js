/*
This processing sketch is part of the first assignment for
 DES 157 - Interactive Media II class at UC Davis.
 It is an interactive banner to be implemented on an HTML file.
 01/13/19
 Jean Menezes
 */

console.log('reading js');
console.log('change2');


//bgImage
var bg;
//controlHue
var cHue;
//control bgXPosition
var x, y;
//control bgYPosition


var iconA, iconB;





function setup() {
  var myCanvas = createCanvas(800, 250);

  myCanvas.parent('mySketch');
  colorMode(HSB, 360, 100, 100, 100);



  // iconA = loadShape("iconA.svg");


  //instatiating bgImage
  bg = loadImage("bannerProcessing/coloredBanner2.jpg");
  iconA = loadImage("bannerProcessing/iconA.png");
  iconB = loadImage("bannerProcessing/iconB.png");
}

function draw() {
  background(0);


  //initial values for x,y
  x = -100;
  y = -31;

  //testing canvas

  // fill(250,70,70);
  // rect(0,0,width, height);


  image(bg, x, y);


  //creating parallax in x

if (mouseX < - 101) {
    x = map(mouseX, 0, 2000, - 100, 50);
      // image(bg, - 101, y);
} else if (mouseX >= - 80 && mouseX <= 70) {
    //instatiating x,y

    x = map(mouseX, 0, 2000, - 100, 50);
    //x = mouseX/7-100;

    image(bg, x, y);
  } else if (mouseX > 71 && mouseX <= 750) {
    image(bg, -90, -31);
  } else {
    x = map(mouseX, 750, 10000, -90, 800);
    image(bg, x, y);
      // image(bg, -90, -31);
  }


console.log(x);


  // mapping values to match with of canvas
  cHue = map(mouseX, 0, width, 0, width/2 - 40);
  //changing Hue of Image with mouseX

 tint(cHue, 70, 90);

  //mouseIndicator
  noCursor();
  push();
  blendMode(BLEND);
  fill(200, 10, 95, 50);
  noStroke();
  ellipse(mouseX, mouseY, 20, 20);
  ellipse(mouseX, mouseY, 10, 10);
  pop();


  //
  // //drawing Icons

  if (mouseIsPressed) {


    tint(cHue, 70, 90);

    translate(-60, -15);
    scale(1.15);
    image(iconB, width / 2 - 50, height / 2 - 50);
  } else {
    noTint();
    image(iconA, width / 2 - 50, height / 2 - 50);
    image(iconA, width / 2 - 50, height / 2 - 50);

  }

}

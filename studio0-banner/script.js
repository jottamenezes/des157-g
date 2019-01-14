




/*
This processing sketch is part of the first assignment for
 DES 157 - Interactive Media II class at UC Davis.
 It is an interactive banner to be implemented on an HTML file.
 01/13/19
 Jean Menezes
 */

 console.log('reading js');

//bgImage
var bg;
//controlHue
var cHue;
//control bgXPosition
var x;
//control bgYPosition
var y;

var img;

//vectorIcon

// PShape iconA, iconB;



function setup() {
var myCanvas = createCanvas (800,250);

myCanvas.parent('mySketch');
  colorMode(HSB, 360, 100, 100);

  img = loadImage("bannerProcessing/coloredBanner.jpg");

  // iconA = loadShape("iconA.svg");


  //instatiating bgImage
  bg = loadImage("bannerProcessing/coloredBanner2.jpg");
}

function draw() {
  background(0);


  //initial values for x,y
  x = -100;
  y = -31;

//testing canvas

fill(250,70,70);
rect(0,0,width, height);

noStroke();
ellipse( mouseX, mouseY, 50,50);

  // //creating parallax in x
  // if (mouseX > -100 && mouseX <= 50) {
  //   //instatiating x,y
  //
  //  x = map(mouseX, 0, 2000, -100, 50);
  //   //x = mouseX/7-100;
  //
  //   image(bg, x, y);
  // } else if (mouseX> 50 && mouseX <= 750) {
  //   x = -90;
  // } else {
  //   x = map(mouseX, 750, 3460, -90, 800);
  // }




  // // mapping values to match with of canvas
  // cHue = map(mouseX, 0, 800, 0, 360);
  // //changing Hue of Image with mouseX
  // image(img, 0, 0);
  //   image(bg, 0, 0);
  // // tint(cHue, 70, 90);

  //
  // //drawing Icons
  // iconA.disableStyle();  // Ignore the colors in the SVG
  // fill(255, 200);    // Set the SVG fill to blue
  // noStroke();
  // if (mousePressed == true) {
  //     iconB.disableStyle();  // Ignore the colors in the SVG
  // fill(255, 200);    // Set the SVG fill to blue
  // noStroke();
  // translate(-60,-15);
  //       scale(1.15);
  //     shape(iconB, width/2-50, height/2 -50);
  // }else{
  //
  // shape(iconA, width/2-50, height/2 -50);}

}

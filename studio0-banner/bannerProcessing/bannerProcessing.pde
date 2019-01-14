/*
This processing sketch is part of the first assignment for
 DES 157 - Interactive Media II class at UC Davis.
 It is an interactive banner to be implemented on an HTML file.
 01/13/19
 Jean Menezes
 */

//bgImage
PImage b; 
//controlHue
float cHue;
//control bgXPosition
float x;
//control bgYPosition
float y;

//vectorIcon

PShape iconA, iconB;  



void setup() {
  size(800, 250);
  colorMode(HSB, 360, 100, 100);

  iconA = loadShape("iconA.svg");


  //instatiating bgImage
  b = loadImage("coloredBanner2.jpg");
}

void draw() {
  background(0);


  //initial values for x,y
  x = -100;
  y = -31;



  //creating parallax in x
  if (mouseX > -100 && mouseX <= 50) {
    //instatiating x,y

   x = map(mouseX, 0, 2000, -100, 50);
    //x = mouseX/7-100;

    image(b, x, y);
  } else if (mouseX> 50 && mouseX <= 750) {
    x = -90;
  } else {
    x = map(mouseX, 750, 3460, -90, 800);
  }




  // mapping values to match with of canvas
  cHue = map(mouseX, 0, 800, 0, 360);
  //changing Hue of Image with mouseX
  image(b, x, y);
  tint(cHue, 70, 90);



  //drawing Icons
  iconA.disableStyle();  // Ignore the colors in the SVG
  fill(255, 200);    // Set the SVG fill to blue
  noStroke();
  shape(iconA, width/2-50, height/2 -50);
}

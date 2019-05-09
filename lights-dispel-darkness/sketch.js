var col= 255;
let light;

function setup () {
  circle= loadImage ('circle_1.png');
  light=loadImage ('light.png');
  createCanvas (displayWidth, displayHeight);
}

function draw () {
  col= mouseX/4
  // background
  background (col);
image(light, mouseX, mouseY);
}


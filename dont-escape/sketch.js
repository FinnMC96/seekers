
let x;
let y;

let xspeed;
let yspeed;

let problem;

function preload () {
problem=loadImage ('escape.png');
}



function setup() {
  createCanvas(displayWidth,displayHeight);
  x= random(width);
  y=random (height);
  xspeed=10;
  yspeed=10;
  
}

function draw() {
  background(255);

  //rect(x, y, 80,60);
  // Draw the problem png
  image(problem,x, y);
  
  x=x+xspeed;
  y=y+yspeed;
  
  if (x  >= windowWidth || x==-200 ) {
    xspeed = xspeed;
    x= windowWidth-width;
  } else if (x <= 0) {
    xspeed=-xspeed;
    x=windowWidth;
    
    
 
     }
     if (y >= windowHeight || y==200 ) {
        yspeed = yspeed;
    y=windowHeight-height;
  } else if (y <= 0) {
    yspeed=-yspeed;
    y=windowHeight;
    
  }
    
    
       
 
}
function mousePressed() {
  noLoop();
}
function doubleClicked () {
  remove ();
}

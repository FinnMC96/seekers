let unused;
let song;


function setup(){
 unused=loadImage ( 'time.png');
song = loadSound ("clock.mp3", loaded);
song.setVolume (0.3);
  createCanvas(windowWidth, windowHeight);
}
function loaded (){
  song.play();
}

  function draw(){
  background (255);
    angleMode(DEGREES);
image(unused,265,350);

  let hr= hour ();
  let mn= minute();
  let sc= second();

strokeWeight (12);
let minuteAngle=map (mn, 0, width, 0,360);
stroke (0);
noFill();
ellipse (400, 400, 400,400,0,minuteAngle);
    
    strokeWeight (4);
    let secondAngle = map (sc, 0, width, 0,360);
    stroke (255);
    arc (400, 400, 400, 400, 0, secondAngle);
    
  }
function doubleClicked() {
remove('unused');

  
}
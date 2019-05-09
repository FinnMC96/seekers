let img;



function setup(){
  img=loadImage ('submerge.png');
  
  

  createCanvas(windowWidth,windowHeight);

}

function draw(){
  //reset to bottom
  if( img > 100 ) {
 
  }

  image(img,mouseX,mouseY);
  
}
function mousePressed() {
  clear();
  
}
 
function doubleClicked() {
  remove ();
}



 
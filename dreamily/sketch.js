let img;
let offset = 0;
let easing = 0.05;

function setup() {
  createCanvas(windowWidth,windowHeight);
  img = loadImage('dreamily.png'); // Load an image into the program
}

function draw() {
  background(255);
  image(img, 200, 200); // Display at full opacity
  let dx = mouseX - img.width / 2 - offset;
  offset += dx * easing;
  tint(255, 127); // Display at half opacity
  image(img, offset, 200);
}

function doubleClicked() {
remove() ;

}

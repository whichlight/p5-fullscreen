
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  stroke(255);
  strokeWeight(10);
  line(windowWidth/2, 0, windowWidth/2, windowHeight);
}

function draw() {
  stroke(255);
  strokeWeight(10);
  line(mouseX, 0, mouseX, windowHeight);
}





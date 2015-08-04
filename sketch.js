//touch interaction var
var i = {x:0, y:0};

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);


  //disable default touch events for mobile
  var el = document.getElementsByTagName("canvas")[0];
  el.addEventListener("touchstart", pdefault, false);
  el.addEventListener("touchend", pdefault, false);
  el.addEventListener("touchcancel", pdefault, false);
  el.addEventListener("touchleave", pdefault, false);
  el.addEventListener("touchmove", pdefault, false);
}

function pdefault(e){
  e.preventDefault()
}

function draw() {
  update();
  render();
}

function update(){
  //normalize interaction
  i.x = max(touchX, mouseX);
  i.y = max(touchY, mouseY);


}

function render(){
  background(0);
  stroke(255);
  strokeWeight(10);
  line(i.x, 0, i.x, height);

  stroke(255);
  strokeWeight(10);
  line(0, i.y, width, i.y);
}






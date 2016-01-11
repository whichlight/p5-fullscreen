//touch interaction var
var m = {x:0, y:0};


function setup() {
  createCanvas(windowWidth, windowHeight);
  grow = windowHeight;
  background(0);


  //disable default touch events for mobile
  var el = document.getElementsByTagName("canvas")[0];
  el.addEventListener("touchstart", pdefault, false);
  el.addEventListener("touchend", pdefault, false);
  el.addEventListener("touchcancel", pdefault, false);
  el.addEventListener("touchleave", pdefault, false);
  el.addEventListener("touchmove", pdefault, false);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
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
  m.x = max(touchX, mouseX);
  m.y = max(touchY, mouseY);
  m.pressed = mouseIsPressed || touchIsDown;

}

function render(){
  if(m.pressed){
    background(0);
    stroke(255);
    strokeWeight(10);

    for(var i=0; i<windowWidth/20; i+=1){
      // line(i, 0, i, windowHeight);
      strokeWeight(10);
      stroke(255);
      line(20*i, windowHeight, m.x,m.y);
    }
  }
}






function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 450);
}

function draw() {
  background(450);

  for (var x = 10; x < width-10; x = x + 10) {
    stroke(x,450,450);//the hue is different for each line
    line(x, height/2, mouseX, mouseY);
  }
}

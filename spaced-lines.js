function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

//the space between each lines is 70 pixels
  for (var x = 10; x <= width-10; x = x + 70) {
    line(x, height/2, mouseX, mouseY);
  }
}

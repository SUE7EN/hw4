//my homework
function setup() {
  createCanvas(400, 400);
  colorMode(HSB, width, height, 100);
}

function draw() {
  
  var y = random(height);
 
  for (var x = random(width); x < width; x += 4){
    stroke(x, y, 100);
    point(x, y);
  }
  
}

/*during class

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, width, height, 100);
}

function draw() {
  
 
  for (i = 0; i <1000; i++){
    var x = random(width);
    var y = random(height);
    
    stroke(x, y, 100);
    point(x, y);
  }  
}
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  
}

function draw() {
  background(0)
  
  for (let x = 10; x < width; x += 40) {
    for (let y = 10; y < height; y += 40) {

    fill (random(255), random(255), random(255));
    circle(x, y, random(5 , 10));
    }
  }

}

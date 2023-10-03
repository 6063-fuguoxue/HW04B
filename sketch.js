function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

let yVelocity = 10;
let D = 0;

function draw() {
  if ((shapeIndex == 1)) {
    background(255);
    noStroke();
    fill(colorCode);
    ellipse(xPos, yPos, D);
    yPos += yVelocity;
  }
}

// Get a random integer
function randomInt(max) {
  return Math.floor(Math.random() * max);
}

let shapeIndex = 0;
let colorCode = 'red';
let xPos = 0, yPos = 0;

function mouseClicked() {
  noStroke();
  shapeIndex = randomInt(3);
  colorIndex = randomInt(3);
  xPos = mouseX;
  yPos = mouseY;

  switch(colorIndex) {
    case 0: colorCode = 'red';
    break;
    case 1: colorCode = 'blue';
    break;
    case 2: colorCode = 'yellow';
    break;
  }

  fill(colorCode);
  
  switch(shapeIndex) {
    case 0: // Draw a rectangle
    translate(mouseX, mouseY);
    angle = (PI/2) * randomInt(4);
    rotate(angle);
    rect(0, 0, random(30, 300), random(30, 300));
    rotate(-angle);
    translate(-mouseX, -mouseY);
    break;
    case 1: // Draw a circle, but it should animate to fall so don't draw here
    D = random(30, 300);
    break;
    case 2: // No shape is drawn
    break;
  }

  strokeWeight(randomInt(30) + 1);
  stroke(random(0,255));
  line(0, mouseY, windowWidth, mouseY);
  line(mouseX, 0, mouseX, windowHeight);
}
let ballX;
let ballY;
let ballSize = 50;
let speedX;
let speedY;
let squashFactorX = 1;
let squashFactorY = 1;
let squashChangeSpeed = 0.05;

function setup() {
  createCanvas(400, 400);
  ballX = width / 2;
  ballY = height / 2;
  speedX = random(1, 3);
  speedY = random(1, 3);
}

function draw() {
  background(220);

  // Apply changes to speedX and speedY separately
  speedX += random(-0.1, 0.1);
  speedY += random(-0.1, 0.1);

  ballX += speedX;
  ballY += speedY;

  if (ballX > width - ballSize / 2 || ballX < ballSize / 2) {
    speedX *= -1;
    squashFactorX = 0.5;  // Squash horizontally
    squashFactorY = 1;    // Reset vertical squash
  }
  if (ballY > height - ballSize / 2 || ballY < ballSize / 2) {
    speedY *= -1;
    squashFactorY = 0.5;  // Squash vertically
    squashFactorX = 1;    // Reset horizontal squash
  }

  // Constrain the speed within a range
  speedX = constrain(speedX, -3, 3);
  speedY = constrain(speedY, -3, 3);

  // Draw the ellipse with the squash effect
  ellipse(ballX, ballY, ballSize * squashFactorX, ballSize * squashFactorY);

  // Apply squashing effect
  squashFactorX = lerp(squashFactorX, 1, squashChangeSpeed);
  squashFactorY = lerp(squashFactorY, 1, squashChangeSpeed);
}
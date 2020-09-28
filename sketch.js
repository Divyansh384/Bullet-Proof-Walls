var bullet, wall;
var speed, weight, thikhness;
function setup() {
  createCanvas(1600,400);

  speed = random(223, 321);
  weight = random(30, 52);
  thikhness = random(22, 83);

  bullet = createSprite(50, 200, 50, 50);
  bullet.shapeColor = "blue";
  bullet.velocityX = speed;
  
  wall = createSprite(1200, 200, thikhness, height/2);
  wall.shapeColor = (80, 80, 80);
}

function draw() {
  background(0, 0, 0); 

  if (wall.x -bullet.x < (bullet.width + wall.width)/2) {
      bullet.velocityX = 0;

      var damage = 0.5 * buletWeight * bulletSpeed * bulletSpeed / (thikhnessofwall * thikhnessofwall * thikhnessofwall);

      if(damage > 3.68) {
        bullet.shapeColor = "green";
      }

      if(damage > 12.43) {
        bullet.shapeColor = "red";
      }
  }

  drawSprites();
}
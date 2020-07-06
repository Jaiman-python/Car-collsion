var car,wall;
var speed, weight;
var deformation;


function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50, 50, 50, 30);
  wall = createSprite(1500, 150, 40, 800);
  wall.shapeColor = (80,80,80);

  car.velocityX = speed;
}

function draw() {
  background(255,255,255);
  car.collide(wall);

  console.log(deformation);

  if(car.x > 1450){
    car.velocityX = 0;
    deformation = (0.5 * weight *speed * speed)/22500;

    if(deformation < 100){
      car.shapeColor = color(0,255,0);
    }

    if(deformation <180 && deformation > 100){
      car.shapeColor = color(230,230,0);
    }

    if(deformation > 180){
      car.shapeColor = color(255,0,0);
    }
  }

  drawSprites();
}
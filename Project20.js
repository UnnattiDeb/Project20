var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  car = createSprite(200,200,50,50);
  wall = createSprite(1200,200,60,100);

  car.shapeColor = "white";

  car.velocityX = 6;
  speed = random(25,30);
  weight = random(400,1500);
  
}

function draw() {
  background("black"); 
  
  if(wall.x - car.x<(car.width+wall.width)/2)
  {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed* speed/22500;
    if(deformation>180);
    {
      car.shapeColor = color("red");
    }
    if(deformation<180 && deformation>100){
      car.shapeColor = color("yellow");
    }
    if(deformation<100){
      car.shapeColor = color("lime");
    }
  }


  drawSprites();
}
var bullet, wall, speed, weight;
var thickness;


function setup() {
  createCanvas(1500,400);
  speed= random(55, 90);
  weight= random(400, 1500);
  thickness= random(22, 83);
  bullet = createSprite(50, 200, 100, 20);
  bullet.shapeColor = "white"
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(30, 30, 30); 
}

function draw() {
  background(0);  
  drawSprites();
  bullet.velocityX = speed
  if(istouching(bullet, wall)){
    deformation = (0.5*weight*speed*speed)/(thickness*thickness*thickness)
  bullet.velocityX = 0
    if(deformation<10){
      wall.shapeColor= "green"
    }
    else if(deformation>10){
      wall.shapeColor = "red"
    }
  }
}




var fixedRect, movingRect;
var gob1,gob2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
gob1 = createSprite(600,400,50,80);
gob2 = createSprite(800,400,80,30);
gob1.shapeColor = "green";
gob2.shapeColor = "green";
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  gob1.x = World.mouseX;
  gob1.y = World.mouseY;
if (isTouching(gob1,gob2)){
  gob1.shapeColor = "blue";
gob2.shapeColor = "blue";
}
else{
  gob1.shapeColor = "green";
gob2.shapeColor = "green";
}
bounceOff(movingRect,fixedRect);
  drawSprites();
}

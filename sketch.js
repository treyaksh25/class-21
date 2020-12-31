var ring, movingRect,ring;

function setup() {
  createCanvas(1200,800);
  ring = createSprite(600, 400, 50, 80);
  ring.shapeColor = "green";
  ring.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ring = createSprite(800,300,50,50);
  ring.shapeColor = "orange"

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect,ring)){
ring.shapeColor = "cyan";
ring.velocityX = 15;
 }
 else{
   ring.velocityY = 15;

 }

drawSprites();
}



var bullet,hitter;
var thickness,speed,weight;
var damage,uppervalue,lowervalue;
function setup() {
  createCanvas(800,400);
  bullet = createSprite(100, 200, 50, 10);
  thickness = random(22,83);
  hitter = createSprite(790, 200, thickness, 400);
  //hitter.debug = true;
  speed = random(223,321);
  weight = random(30,52);
  bullet.velocityX = speed;
}

function draw() {
  background(000);
  if (isTouching(hitter,bullet)) {
    bullet.velocityX = 0; 
     damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
     console.log(damage);
      
      if(damage < 10){
        hitter.shapeColor = "green";
      }
      if(damage > 11 && damage < 500){
        hitter.shapeColor = "red";
      }
  }
  console.log(bullet.velocityX);
 
  drawSprites();
}
function isTouching(object1,object2){
  if(object2.x - object1.x <= object1.width/2 + object2.width/2
      && object1.x - object2.x <= object1.width/2 + object2.width/2 
      && object2.y - object1.y <= object1.height/2 + object2.height/2
      && object1.y - object2.y <= object1.height/2 + object2.height/2){
        return true;
      } 
    else{
      return false;
  }
}



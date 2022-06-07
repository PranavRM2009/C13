var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;

var obstacle, obstacleImage1, obstacleImage2, obstacleImage3, obstacleImage4, obstacleImage5, obstacleImage6,obstaclesGroup

var score=0
var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 
  obstacleImage1 = loadImage("obstacle1.png")
  obstacleImage2 = loadImage("obstacle2.png")
  obstacleImage3 = loadImage("obstacle3.png")
  obstacleImage4 = loadImage("obstacle4.png")
  obstacleImage5 = loadImage("obstacle5.png")
  obstacleImage6 = loadImage("obstacle6.png")

}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  
}

function draw() {
  background(180);
  //concatenation
  text("SCORE : " +score,500,25)
  score=score + Math.round(frameCount/60)
  //console.log("FrameCount is: "+frameCount+" and fc/60 is: "+frameCount/60)
  
  if(keyDown("space") && trex.y>=160) {
    trex.velocityY = -13;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();

  spawnObstacles()
  
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;

    // speed of an object = distance covered by that object/time taken to cover the distance
    // 2/10
    // time = distance/speed
    cloud.lifetime = 200
  }
}
function spawnObstacles() {
  if (frameCount % 60 === 0) {
    obstacle = createSprite(600,160,40,10);
    obstacle.scale = 0.5;
    obstacle.velocityX = -6;
    obstacle.lifetime = 200

    var rand =  Math.round(random(1,6))
    switch(rand){
      case 1 : obstacle.addImage(obstacleImage1)
      break

      case 2 : obstacle.addImage(obstacleImage2)
      break

      case 3 : obstacle.addImage(obstacleImage3)
      break

      case 4 : obstacle.addImage(obstacleImage4)
      break

      case 5 : obstacle.addImage(obstacleImage5)
      break

      case 6 : obstacle.addImage(obstacleImage6)
      break
      
      default: break
    }
  }
}


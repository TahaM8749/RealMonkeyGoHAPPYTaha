var survivalTime = 0;
var monkey , monkey_running
var banana ,ground, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup, bananaGroup;
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600,500); 

  
  monkey = createSprite(50,450,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.15;
  
  ground = createSprite(300,500,600,20);
  ground.shapeColor = "green";
  console.log(ground.x);
  
  
}


function draw() {
  background("lightBlue");
  
  ground.velocityX = -6;
  ground.x = ground.width/2;
  
  monkey.collide(ground);
  if(keyDown("space")&&monkey.y>420){
     monkey.velocityY = -17;
  }
  monkey.velocityY = monkey.velocityY +0.8
  
  survivalTime = survivalTime + Math.round(getFrameRate()/60);
  
    stroke("black");
    textSize(20);
    fill("black");
    text("Survival Time: "+ survivalTime, 125,100);
  
  spawnBananas();
  spawnObstacles();
  
  drawSprites();
}

function spawnBananas(){
 if(World.frameCount%80 === 0){
  banana = createSprite(600,265,20,20);
  banana.addImage("banana",bananaImage);
  banana.scale = 0.15;
  banana.velocityX = -6; 
  banana.y = Math.round(random(230,330))
  banana.setLifetime = 50;
  } 
}

function spawnObstacles(){
 if(World.frameCount % 100 === 0){
  obstacle = createSprite(600,475,30,30);
  obstacle.addImage("obstacle",obstacleImage); 
  obstacle.velocityX = -6;
  obstacle.scale = 0.2;
  obstacle.lifeTime = 50;
  } 
}



var bg,bgImg;
var player1_img, player1,shooterImg, shooter_shooting;
var running, zombieImg,zombie, knifeA;


function preload(){
bg = loadImage("assets/bg.jpg") 
player1_img=loadAnimation("assets/player1/png/Idle (1).png","assets/player1/png/Idle (2).png","assets/player1/png/Idle (3).png","assets/player1/png/Idle (4).png","assets/player1/png/Idle (5).png","assets/player1/png/Idle (6).png","assets/player1/png/Idle (7).png","assets/player1/png/Idle (8).png","assets/player1/png/Idle (9).png","assets/player1/png/Idle (10).png");
running = loadAnimation("assets/player1/png/Run (1).png","assets/player1/png/Run (2).png","assets/player1/png/Run (3).png","assets/player1/png/Run (4).png","assets/player1/png/Run (5).png","assets/player1/png/Run (6).png","assets/player1/png/Run (7).png","assets/player1/png/Run (8).png");
zombieImg= loadAnimation("assets/zombiefiles/png/male/Attack (1).png","assets/zombiefiles/png/male/Attack (2).png","assets/zombiefiles/png/male/Attack (3).png","assets/zombiefiles/png/male/Attack (4).png","assets/zombiefiles/png/male/Attack (5).png","assets/zombiefiles/png/male/Attack (6).png","assets/zombiefiles/png/male/Attack (7).png","assets/zombiefiles/png/male/Attack (8).png");
knifeA =loadAnimation("assets/player1/png/Melee (1).png","assets/player1/png/Melee (2).png","assets/player1/png/Melee (3).png","assets/player1/png/Melee (4).png","assets/player1/png/Melee (5).png","assets/player1/png/Melee (6).png","assets/player1/png/Melee (7).png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  player1 = createSprite(200,200,20,20);
  player1.addAnimation("idle",player1_img);
  player1.addAnimation("run",running);
  player1.addAnimation("attack",knifeA)
  player1.scale=0.4;
  

}

function draw() {
  background(bg)
  if(keyDown("UP_ARROW"))
  {
  player1.changeAnimation("run",running);
  player1.y-=10;
  }

  if(keyWentUp("UP_ARROW"))
  {
  player1.changeAnimation("idle",player1_img);
  }

  if(keyDown("DOWN_ARROW"))
  {
  player1.changeAnimation("run",running);
  player1.y+=10;
  }

  if(keyWentUp("DOWN_ARROW"))
  {
  player1.changeAnimation("idle",player1_img);
  }

  if(keyDown("LEFT_ARROW"))
  {
  player1.changeAnimation("run",running);
  player1.x-=10;
  }

  if(keyWentUp("LEFT_ARROW"))
  {
  player1.changeAnimation("idle",player1_img);
  }

  if(keyDown("RIGHT_ARROW"))
  {
  player1.changeAnimation("run",running);
  player1.x+=10;
  }

  if(keyWentUp("RIGHT_ARROW"))
  {
  player1.changeAnimation("idle",player1_img);
  }

  if(keyDown("SPACE"))
  {
  player1.changeAnimation("attack",knifeA);
  }
  if(keyWentUp("SPACE"))
  {
  player1.changeAnimation("idle",player1_img);
  }

  spawnZombies();
  spawnmZombies
  drawSprites();

}

function spawnZombies()
{
if (World.frameCount % 50 == 0) 
{
zombie = createSprite(0,Math.round(random(windowWidth, -370)), 10, 10);
zombie.addAnimation("running", zombieImg);
zombie.scale = 0.4;
zombie.velocityX = 4;
zombie.lifetime=800;
}
}

function spawnmZombies()
{
if (World.frameCount % 50 == 0) 
{
zombie = createSprite(0,Math.round(random(windowWidth, -370)), 10, 10);
zombie.addAnimation("running", zombieImg);
zombie.scale = 0.4;
zombie.velocityX = 4;
zombie.lifetime=800;
}
}

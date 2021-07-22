var garden,rabbit, blood_fruit, decoy_bot;
var gardenImg,rabbitImg, blood_img, decoy_bot_disguise;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  blood_img = loadImage('apple.png')
  decoy_bot_disguise = loadImage('redImage.png')
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}
function blood_fruit_former(){
  blood_fruit = createSprite(random(50,350),40,10,10)
  blood_fruit.addImage(blood_img)
  blood_fruit.scale=0.05
  blood_fruit.velocityY=3
}
function decoy_bot_deployer(){
  decoy_bot = createSprite(random(50,350),40,10,10)
  decoy_bot.addImage(decoy_bot_disguise)
  decoy_bot.scale=0.05
  decoy_bot.velocityY=3
}


function draw() {
  background(0);
  rabbit.x=mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
  var boss_of_all = round(random(1,2))
  if (frameCount%80==0){
    if (boss_of_all==1){
      blood_fruit_former()
    }
    else{
      decoy_bot_deployer()
    }
  }
  drawSprites();
}
var path,boy,cash,diamonds,jwellery,sword, workout;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg, workoutImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup, workoutG;
var world,engine
var viruses=[]

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
  workoutImg =loadImage("workout.png")
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
  engine=Matter.Engine.create()
  world=engine.world
// Moving background
path=createSprite(width/2,height/2);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(70,height - 30,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  

cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();
workoutG=new Group();

}

function draw() {
  Matter.Engine.update(engine)
  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > height ){
    path.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();
    createWorkout();
    createVirus()

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection= treasureCollection + 150;
    
    }else if(workoutG.isTouching(boy)) {
      workoutG.destroyEach();
      treasureCollection= treasureCollection + 250;
      
    }else{
      if(swordGroup.isTouching(boy)) {
        gameState=END;
        
        boy.addAnimation("SahilRunning",endImg);
        boy.x=width/2;
        boy.y=height/2;
        boy.scale=0.6;
        
        cashG.destroyEach();
        diamondsG.destroyEach();
        jwelleryG.destroyEach();
        swordGroup.destroyEach();
        workoutG.destroyEach()
        
        cashG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);
        jwelleryG.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
        workoutG.setVelocityYEach(0);
    }
  }
  
  drawSprites();
   for (var i = 0; i<viruses.length; i++){
     viruses[i].display()
   }
  textSize(20);
  fill(255);
  text("Score: "+ treasureCollection,150,30);
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, width-50),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 350;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, width-50),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 350;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(50, width-50),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 350;
  jwelleryG.add(jwellery);
  }
}

function createWorkout() {
  if (World.frameCount % 410 == 0) {
  var workout = createSprite(Math.round(random(50, width-50),40, 10, 10));
  workout.addImage(workoutImg);
  workout.scale=0.6;
  workout.velocityY = 3;
  workout.lifetime = 350;
  workoutG.add(workout);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, width-50),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 350;
  swordGroup.add(sword);
  }
}

function createVirus(){
  if (World.frameCount % 35 == 0){
    var virusob = new Virus(Math.round(random(50,width/2)), 0, 70)
    viruses.push(virusob)
  }
}
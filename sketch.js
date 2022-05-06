var human, trash, humanI,trashI;
var submit,submitI;
var eyesI,bileI,femurI,intI,liverI,pancreasI,skullI,tailI,tickI,tonI,wingsI;
var eyes,tongue,skull,tail;
var e,v,t;
var score=0;
let currentDroppable = null;
function preload(){
  humanI=loadImage("body.jpg");
  trashI=loadImage("trash.png");
  submitI=loadImage("tick.jpg");
  eyesI=loadImage("eyes.png");
  bileI=loadImage("bile.png");
  femurI=loadImage("femur.png");
  intI=loadImage("int.png");
  liverI=loadImage("liver.png");
  pancreasI=loadImage("pancreas.png");
  skullI=loadImage("skull.png");
  tailI=loadImage("tail.png");
  tickI=loadImage("tick.jpg");
  tonI=loadImage("ton.png");
  wingsI=loadImage("wings.png");
}
function setup() {
  createCanvas(1200,1000);
  human=createSprite(500,250,200,750);
  human.addImage(humanI);
  human.scale=2.9;
  trash=createSprite(700,500,50,50);
  trash.addImage(trashI);
  trash.scale=0.3;
  eyes=createSprite(200,130,20,20);
  eyes.addImage(eyesI);
  eyes.scale=0.01;
  tongue=createSprite(200,250,30,30);
  tongue.addImage(tonI);
  tongue.scale=0.05;
  skull=createSprite(200,370,30,30);
  skull.addImage(skullI);
  skull.scale=0.05;
  tail=createSprite(200,430,30,30);
  tail.addImage(tailI);
  tail.scale=0.50;
   e=createSprite(510,50,10,30);
   e.visible=false;
   v=createSprite(510,45,10,10);
   v.visible=false;
   t=createSprite(510,70,10,10);
   t.visible=false;
   tongue.debug=false;
   eyes.debug=false;
   e.debug=false;
   tail.debug=false;
   trash.debug=false;
   skull.debug=false;
   tail.setCollider("circle",0,0,50);
   eyes.setCollider("circle",0,0,50);
   e.setCollider("circle",0,0,30);
}
function draw() {
  background(255,255,255); 
  textSize(30);
  stroke("red");
  text("For Eyes use up,down,right and left arrow keys",100,650);
  text("For Tongue use t,u,n and g",100,690);
  text("For Skull use s,k,i and l", 100,730);
  text("For Tail use e,o,d and z",100,770);
  text("Score ="+score,600,100);
  if(eyes.isTouching(e)){
    eyes.addImage(tickI);
    eyes.scale=0.5;
    e.destroy();
    score=score+1;
  }
  if(tongue.isTouching(t)){
    tongue.addImage(tickI);
    tongue.scale=0.5;
   t.destroy();
   score=score+1;
  }
  if(skull.isTouching(v)){
    skull.addImage(tickI);
   skull.scale=0.5;
   v.destroy();
   score=score+1;
  }
  if(tail.isTouching(trash)){
    tail.addImage(tickI);
    trash.destroy();
    score=score+1;
   }
  
  text("Human Anatomy",100,50);
  if(keyIsDown(RIGHT_ARROW)){
    eyes.x=eyes.x+5;
  }
  if(keyIsDown(UP_ARROW)){
    eyes.y=eyes.y-5;
  }
  if(keyIsDown(LEFT_ARROW)){
    eyes.x=eyes.x-5;
  }
  if(keyIsDown(DOWN_ARROW)){
    eyes.y=eyes.y+5;
  }

  if(keyDown("t")){
    tongue.x=tongue.x+5;
  }
  if(keyDown("u")){
    tongue.y=tongue.y-5;
  }
  if(keyDown("n")){
    tongue.x=tongue.x-5;
  }
  if(keyDown("g")){
    tongue.y=tongue.y+5;
  }

  if(keyDown("s")){
    skull.x=skull.x+5;
  }
  if(keyDown("k")){
    skull.y=skull.y-5;
  }
  if(keyDown("i")){
    skull.x=skull.x-5;
  }
  if(keyDown("l")){
    skull.y=skull.y+5;
  }

  if(keyDown("e")){
    tail.x=tail.x+5;
  }
  if(keyDown("o")){
    tail.y=tail.y-5;
  }
  if(keyDown("d")){
    tail.x=tail.x-5;
  }
  if(keyDown("z")){
    tail.y=tail.y+5;
  }
  
  drawSprites();
  text("Score ="+score,600,100);
  if(score==4){
    textSize(80);
    stroke("black");
    text("You Won",400,300);
  } 
}
function mouseDragged(){
tongue.x=mouseX;
tongue.y=mouseY;
}
//+917018137240
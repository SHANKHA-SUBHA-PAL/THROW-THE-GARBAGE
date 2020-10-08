
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const circle = Matter.Body.circle;

var paperBall;
var bSide1,bSide2,bSide3;
var groundSprite;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);

	
	engine = Engine.create();
	world = engine.world;

	paperBall = new Paper(10,100,50);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow")

	bSide1 = createSprite(870,height-40,200,20);
	bSide1.shapeColor = "red";

	bSide2 = createSprite(760,height-80,20,100);
	bSide2.shapeColor = "red";

	bSide3 = createSprite(960,height-80,20,100);
	bSide3.shapeColor = "red";

	

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background(0);
  
  
  drawSprites();
  paperBall.display();
  keyPressed();
}

function keyPressed(){

if(keyCode === UP_ARROW){

Matter.Body.applyForce(Paper.body,Paper.body.position,{x:85,y:-85});

}


}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper;
var ground;
var dust;

function preload()
{

	
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	dust = new Dustbin();

	paper = new Paper(200, height - 50);

	ground = new Ground(width/2, height-35, width, 10);


	//targetSprite1=createSprite(1000, height-45, 200, 20);
	//targetSprite1.shapeColor = "grey";
	//targetSprite1.addImage(dustbinImage);

	//targetSprite2=createSprite(900, height-85, 20, 100);
	//targetSprite2.shapeColor = "grey";

	//targetSprite3=createSprite(1100, height-85, 20, 100);
	//targetSprite3.shapeColor = "grey";

	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255)

	//targetBody1 = Bodies.rectangle(1000, height-45, 200, 20, {isStatic:true});
	//World.add(world, targetBody1);

	//targetBody2 = Bodies.rectangle(900 , height-85, 20, 100, {isStatic:true});
	//World.add(world, targetBody2);

	//targetBody3 = Bodies.rectangle(1100, height-85, 20, 100, {isStatic:true});
	//World.add(world, targetBody3);

	//ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
	//World.add(world, ground);

	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);

  

  ground.display();

  dust.display();

  paper.display();

  drawSprites();
 
}

function keyPressed(){

if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paper.body, paper.body.position,{x:320, y:-320});
	
}

}


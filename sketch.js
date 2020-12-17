const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,groundSprite;
var dustbin1,dustbin2,dustbin3;
var paperImage,dustbinImage

function preload(){
    
   
   dustbinImage = loadImage("dustbin.png")
	
}

function setup() {
	createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;
	
	dustbin1 = createSprite(600,500,200,100);
	dustbin2 = createSprite(500,610,20,100);
	dustbin3 = createSprite(700,610,20,100);

	dustbin1.addImage(dustbinImage);

	
	
	

	dustbin1.shapeColor = color(255,0,0);
	dustbin2.shapeColor = color(255,0,0);
	dustbin3.shapeColor = color(255,0,0);
	paper=  new Paper(200,450,40);
	
    groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	    
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 var ground_options = {
		isStatic:true
	  }
	  Engine.run(engine);
	  
	  
	  
  
}


function draw() {
	
	

  rectMode(CENTER);
  background(0);
  drawSprites();
  paper.display(); 
 
  dustbin1.display();
  
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:4,y:-10});
	  
  
	}
}




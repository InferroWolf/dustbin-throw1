
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 ground=new Ground(400,690,800,20);
   ball=new PaperClass(100,10,20);
   db=new dustbin(600,690,200,20);
   dre=new dustbin(700,600,20,200);
	 dle=new dustbin(500,650,20,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  ball.display();
  db.display();
  dre.display();
  dle.display();
  if (keyCode===UP_ARROW){
  
  }
  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-65})
  }
}


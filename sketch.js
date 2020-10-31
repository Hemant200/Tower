
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var ball, ballImg
var ground1
var box

function setup() {
  createCanvas(1200, 600);
  rectMode(CENTER)

  engine = Engine.create();
  world = engine.world;
  
 
  var option1={
		restitution:0.3,
		friction:0.5,
		density:1.2
	}
  ball=Bodies.circle(100, 200, 20, option1)
  
	World.add(world, ball);
fill("white")
 ground1 = new ground(100,570,600,10)
 
 
	//Create the Bodies Here.
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("Purple");
  Engine.update(engine);


  fill(255,0,255)
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y, 20,20);

 
  ground1.display()
 
  drawSprites();
  
}


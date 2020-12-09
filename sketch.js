const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body 
var bar1, bar2, bar3 ;
var engine,world;
var ground;
var paper, dustbin_img;

function preload()
{
dustbin_img = loadImage("images/dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,100,40);
	
	bar1= new dustbinwall(600,height-40,200,20);
	
	bar2= new dustbinwall(700,height-100,20,150);

	bar3= new dustbinwall(500,height-100,20,150);
	
	ground = new Ground(400,680,800,20);

	Engine.run(engine);
  
}   


function draw() {
  background(255,255,255);
  paper.display();
  bar1.display();
  bar2.display();
  bar3.display();
  ground.display();
  imageMode(CENTER);
  image(dustbin_img,600,height-100,235,150)

  drawSprites();

}
  
function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.Paper,paper.Paper.position,{x:180,y:-380});
	}
}

 
  





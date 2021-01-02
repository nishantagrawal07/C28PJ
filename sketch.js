
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango , boy , stone;

function preload()
{
	 boy = loadImage("photos/boy.png");

}

function setup() {
	createCanvas(1100, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600 , 670 , 1200 , 20);
	boy = new Boy(360,650,240,500);
	tree = new Tree(800 , 670 , 500 , 700);
	stone = new Stone(148 , 236 , 80 ,80);

	mango1 = new Mango(700,200,80,80);
	mango2 = new Mango(750,210,80,80) ;
	mango3 = new Mango(870,90,80,80) ;
	mango4 = new Mango(850,200,80,80) ;
	mango5 = new Mango(900,250,80,80) ;
	mango6 = new Mango(936,276,80,80) ;
	mango7 = new Mango(650,160,80,80) ;
	mango8 = new Mango(700,86,80,80) ;
	mango8 = new Mango(800,68,80,80);

	slingshot = new Slingshot(stone.body , {x:114 , y:435});
	
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  ground.display();
  boy.display();
  tree.display();
  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  slingshot.display();

  detectCollision(stone , mango1);
  detectCollision(stone , mango2);
  detectCollision(stone , mango3);
  detectCollision(stone , mango4);
  detectCollision(stone , mango5);
  detectCollision(stone , mango6);
  detectCollision(stone , mango7);
  detectCollision(stone , mango8);
  
  drawSprites();
 
}

function detectCollision(lstone , lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x , stoneBodyPosition.y , mangoBodyPosition.x , mangoBodyPosition.y  );
	if(distance<= lmango.width/2 + lstone.width/2){
		Matter.Body.setStatic(lmango.body , false);
	}
}

function keypressed(){
	if(keyCode === 32){
		//Matter.body.setPosition(stone.body , {x:235 , y:420})
		slingshot.attach(stone.body);
	}
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY}) 
} 

function mouseReleased(){
	 slingshot.fly(); 
	}





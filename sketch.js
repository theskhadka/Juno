const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy1, boy, lmango, lstone;

function preload() {
	boy1 = loadImage("sprites/boy.png")
	tree1 = loadImage("sprites/tree.png")
}

function setup() {
	createCanvas(800, 700);

	boy = createSprite(150, 600, 1, 1);
	boy.addImage("boy", boy1);
	boy.scale = 0.1

	tree = createSprite(600, 400, 1, 1);
	tree.addImage("tree", tree1);
	tree.scale = 0.5

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 675, 800, 25);
	stone = new Stone(100, 535);
	sling1 = new Chain(stone.body, {x: 100, y: 535});
	mango1 = new Mango(550, 200);
	mango2 = new Mango(620, 250);
	mango3 = new Mango(590, 360);
	mango4 = new Mango(670, 410);
	mango5 = new Mango(775, 270);
	mango6 = new Mango(650, 200);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
	ground.display();
	sling1.display();
	stone.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);
	detectCollision(stone, mango6);
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling1.fly();
}

function keyPressed(){
    if (keyCode === 32) {
        sling1.attach(stone.body);
    }
}

function detectCollision(lstone, lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<-lmango.r+lstone.r)
	{
		Body.setStatic(lmango.body, false);
	}
}


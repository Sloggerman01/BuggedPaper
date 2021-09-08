
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
let ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    iStatic:false,
    restitution: 0.3,
    friction: 0,
    density:1.2
  }

  ground = new Ground(200,390,400,20);

  groundOptions ={
    isStatic:true
  }

  ball = Bodies.circle(100,10,5,ball_options);
  World.add(world,ball);
  
 
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ground.show();
  
  ellipse(ball.position.x,ball.position.y,5);
  show();
 
}


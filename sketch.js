const engine = Matter.Engine;
const world = Matter.World;
const bodies = Matter.Bodies;

var myEngine, myWorld, ball;
var ground;

function setup() {
  myEngine = engine.create();
  myWorld = myEngine.world;

  createCanvas(800,400);

  var ball_options = {

    restitution: 1

  }
  ball = bodies.circle(200, 200, 10, ball_options);
  world.add(myWorld, ball);

  var ground_option = {

    isStatic: true

  }

  ground = bodies.rectangle(400, 390, 800, 15, ground_option);
  world.add(myWorld, ground);
}

function draw() {
  background(255,255,255); 
  engine.update(myEngine);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 10, 10);
  rectMode(CENTER);
  fill("green");
  rect(ground.position.x, ground.position.y, 800, 15);
}
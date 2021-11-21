const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var noobbgImg , noobspaceshipImg , noobspaceship;
var noobobstacleImg , noobobstacle , proobstacleImg , proobstacle;
var ground , astroid , uparrow
var score = 0 
function preload() {
  noobbgImg = loadImage("noobbg.png")
  noobspaceshipImg = loadImage("noobspaceship.png")
}
function setup() {
  createCanvas(600,400);
 frameRate(20)
  engine = Engine.create();
  world = engine.world;
  noobspaceship = Bodies . rectangle(260,289,50,50,{ isStatic : false});
  World.add(world,noobspaceship);
  ground = Bodies . rectangle(300,390, width * 2, 1, { isStatic: true })
  World.add(world,ground)
  noobobstacle = Bodies . circle(300,30,40)
  World.add(world,noobobstacle)
  uparrow = createImg('upparrow.png')
  uparrow.position(180,330,30,30)
  uparrow.size(35,35)
  uparrow.mouseClicked(Inair)
  setInterval(increaseTimer,1000)
 }
function draw() 
{
  background(51);
  image(noobbgImg,0,0,600,400)
  Engine.update(engine);
  image(noobspaceshipImg,noobspaceship.position.x,noobspaceship.position.y,50,50)
  if (keyCode === UP_ARROW) {
    noobspaceship.velocityY = -2
  }
  fill(255)
  text("Score: "+ score, 400,100);
}
function Inair() {
  Matter.Body.applyForce(noobspaceship,noobspaceship.position,{x:0,y:-0.06})
  air.play()
}
function increaseTimer() {
  score = score  +1 
}
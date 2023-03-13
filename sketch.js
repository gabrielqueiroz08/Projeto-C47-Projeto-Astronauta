let ground;
let lander;
var lander_img;
var bg_img;
var bg_inicial;
var obs;
var obstacle_img
var fuel = 100


var vx = 0;
var g = 0.05;
var vy = 0;

function preload() {
  lander_img = loadImage("normal.png");
  bg_inicial = loadImage("bg_inicial.jpg")
  bg_img = loadImage("bg.png");
  obstacle_img = loadImage("obstacle.png");

}

function setup() {
  createCanvas(1000, 700);
  frameRate(80);

  lander = createSprite(100, 50, 30, 30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.setCollider("rectangle", 0, 0, 200, 200)

  obs = createSprite(120, 530, 50, 100);
  obs.addImage(obstacle_img);
  obs.scale = 0.5;
  obs.setCollider("rectangle", 0, 100, 300, 300)

  //database = firebase.database();

  // form = new Form();
  // form.display();


  ground = createSprite(100, 600, 2800, 20)


  rectMode(CENTER);
  textSize(15);
}

function draw() {
  background(51);
  image(bg_inicial, 0, 0);


  push()
  fill(255);
  text("Você é um astronauta em 2154. Você está em uma missão pára colonizar Saturno,\n" + "porém, no caminho sua nave é interceptada por um buraco de minhoca, que leva \n" + "você e sua nave para um universo alternativo" +
    " : ", 200, 75)
  pop();

  if (keyCode = 67) {
    bg_image();
    push()
    fill(255);
    text("Velocidade Vertical: " + round(vy), 800, 75);
    text("Velocidade Horizontal: " + round(vx), 800, 50);
    text("Combustível: " + fuel, 800, 25);
    pop();
  }


  //descida
  vy += g;
  lander.position.y += vy;
  lander.position.x += vx;

  if(lander.collide(obs) == true) {
    stop();
  }

  var d = dist(lander.position.x, lander.position.y, obs.position.x, obs.position.y);
  console.log(d)

  if(d <= 35 && (vy < 2 && vy > -2) && vx < 2 && vx > -2) {
    vx = 0
    vy = 0
    g = 0
  }

  drawSprites();
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    up();
    lander.changeAnimation("thrusting");
    thrust.nextFrame();
  }
  if (keycode == RIGHT_ARROW) {
    right();
    lander.changeAnimation("thrusting")
  }
}

function right() {
  vx += 0.2
}

function up() {
  vy = -3
}

function bg_image() {
  image(bg_img, 0, 0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
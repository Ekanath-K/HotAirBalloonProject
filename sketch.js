
var balloon;
var backgroundImg;

function preload() {
  backgroundImg = loadImage("images/Hot Air Ballon-01.png");

}


function setup() {
  createCanvas(500,500);
  balloon = createSprite(400, 200, 50, 50);

  firebase = database;
}

function draw() {
  background(backgroundImg);  

  if (keyPressedDown(LEFT_ARROW)) {
     balloon.x =+ 15;
  }
  drawSprites();
}
var navio, navioImg;
var mar, marImg;

function preload(){
marImg = loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);
  navio = createSprite(200,200,15,10);
  mar = createSprite(200,100,15,10)
}
  

function draw() {
 background("blue");
 drawSprites();
  
 
}
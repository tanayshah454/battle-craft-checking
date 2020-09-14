
var heart1,heart2,player1,player1_img,player2,ground,weapon;
var bg,weapon_img;


function preload(){
bg=loadImage("photos/background.png");
player1_img=loadImage("photos/1noweapons1.png");
weapon_img=loadImage("photos/weapon1.PNG");
player2_img=loadImage("photos/2noweapon.png");
weapon2_img=loadImage("photos/weapon2.png");
}

function setup() {
  var canvas = createCanvas(1200,400);
    
    ground=createSprite(600,410,1200,20);
    ground.visible=false;

    player1=createSprite(100,325,20,20);
    player1.addImage(player1_img);
    player1.scale=0.5;

    weapon=createSprite(player1.x+50,player1.y-35);
    weapon.addImage(weapon_img);
    weapon.scale=0.2

    
    player2=createSprite(1100,325,20,20);
    player2.addImage(player2_img);
    player2.scale=0.5;

    weapon2=createSprite(player2.x-50,player2.y-35);
    weapon2.addImage(weapon2_img);
    weapon2.scale=0.2
}
function draw() {
  background(bg);  

weapon.x=player1.x+50;
weapon.y=player1.y-35;
if(keyDown(UP_ARROW)&&player1.y>=327){
  player1.velocityY=-16;
}

player1.velocityY+=0.7;


player1.collide(ground);

if(keyDown(LEFT_ARROW)){
  player1.x-=5;
}
if(keyDown(RIGHT_ARROW)){
  player1.x+=5;
}
ellipseMode(RADIUS);
stroke("red");
strokeWeight(10);
fill("red");
ellipse(player1.x,player1.y,30,50)


weapon2.x=player2.x-50;
weapon2.y=player2.y-35;
if(keyDown("w")&&player2.y>=327){
  player2.velocityY=-16;
}

player2.velocityY+=0.7;


player2.collide(ground);

if(keyDown("a")){
  player2.x-=5;
}
if(keyDown("d")){
  player2.x+=5;
}
ellipseMode(RADIUS);
stroke("red");
strokeWeight(10);
fill("red");
ellipse(player2.x,player2.y,30,50)
drawSprites();

  
}
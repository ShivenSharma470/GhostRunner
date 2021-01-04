var tower, towerimage, door, doorimage, climber, climberimage

function preload(){
 towerimage=loadImage("tower.png") 
 doorimage=loadImage("door.png")
 climberimage=loadImage("climber.png")
  
}

function setup(){
createCanvas(600,600)  
tower=createSprite(300,300)
tower.addImage(towerimage)
tower.velocityY = 1
}

function draw(){
if (tower.y > 400) {
tower.y = 300
}
doors();
  
drawSprites()  
}

function doors(){
if (frameCount%240 === 0){
door=createSprite(200,-50)
door.velocityY=1
door.addImage(doorimage)
door.x=Math.round(random(120,500))
climber=createSprite(200,10)
climber.addImage(climberimage)
climber.x = door.x
climber.velocityY=1
}
}
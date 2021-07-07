var canvas, backgroundImage;

var  car1, car2, car3, car4,bike,track,car;

var track_img, car1_img, car2_img, car3_img, car4_img,bike_img;

function preload(){
  track_img = loadImage("track.jpg");
  car1_img = loadImage("car1.png");
  car2_img = loadImage("car2.png");
  bike_img = loadImage("motorcycle.png")

  
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  track=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight*5)
  track.addImage(track_img)
  track.velocityY=-3
  
  bike= createSprite(displayWidth/2,4085)
  bike.addImage(bike_img)
}


function draw(){
  background(255)

  if(keyWentDown("LEFT_ARROW")){
    bike.x=bike.x-200;
  }

  if(keyWentDown("RIGHT_ARROW")){
    bike.x=bike.x+200;
  }

  if(keyWentDown("UP_ARROW")){
    bike.y=bike.y-200;
  }

  if(keyWentDown("DOWN_ARROW")){
    bike.y=bike.y+200;
  }

  if(track.y<displayHeight/1.5){
    track.y=displayHeight/2
  }

spawnCar()

drawSprites()
}
function spawnCar(){
  if(frameCount%100===0){
   
      var car = createSprite(displayWidth,4085)

      car.velocityY=-5
      car.x=Math.round(random(400,900))
    
      var rand = Math.round(random(1,2));
      switch(rand) {
        case 1: car.addImage(car1_img);
                break;
        case 2: car.addImage(car2_img);
                break;
        default: break;

  }
}
}
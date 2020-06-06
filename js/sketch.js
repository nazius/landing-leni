var Leni;
var BaseCamp;
var Stars = [];
var numberOfStars = 30
var FINISHED;
var spaceShipImage;
var leniImage;

function preload() {
  spaceShipImage = loadImage('https://res.cloudinary.com/dlw5iqglu/image/upload/c_thumb,g_face,w_50/v1591250211/leni/leni-nave.png');
  leniImage = loadImage('https://res.cloudinary.com/dlw5iqglu/image/upload/c_scale,w_50/v1591254333/leni/leni-avatar2.png');
}

function setup() {
  createCanvas(800, 600);
  Leni = new Ship()
  BaseCamp = new landingArea()
  for (let i = 0; i < numberOfStars; i++) {
    Stars[i] = new Star()
  }
  FINISHED = false
}

function draw() {
  background('black');

  Leni.show()
  BaseCamp.show()
  for (let i = 0; i < numberOfStars; i++) {
    Stars[i].show()
  }

  if(frameCount%75 === 0){
    for (let i = 0; i < numberOfStars; i++) {
      Stars[i].reborn()
    }
  }

  if(Leni.dead){
    FINISHED = true
  }

  if(!FINISHED){
    Leni.update()
    this.handleKeyDown()
    this.detectLanding()
  }
}

function keyPressed() { 
  if(keyCode === 32){ // SPACE
    this.setup()
    loop()
  }
}

function detectLanding() {
  const { x: LeniX , y: LeniY, yspeed, xspeed } = Leni
  const { x: BaseCampX , y: BaseCampY } = BaseCamp

  const distance = dist(LeniX, LeniY, BaseCampX, BaseCampY)
  const absoluteVelocity = (yspeed * yspeed) + (xspeed * xspeed)

  if(distance < 50){
    if(absoluteVelocity < 10){
      console.log("FINISHED ranking:", absoluteVelocity)
      FINISHED = true
    } else {
      Leni.die()
    }
  }

}

function handleKeyDown() { 
  if (keyIsDown(LEFT_ARROW)) {
    Leni.throttleLeft(LEFT_ARROW)
  }

  if (keyIsDown(RIGHT_ARROW)) {
    Leni.throttleRight(RIGHT_ARROW)
  }

  if (keyIsDown(UP_ARROW)) {
    Leni.throttleUp(UP_ARROW)
  }
}

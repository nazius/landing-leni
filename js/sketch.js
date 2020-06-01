var Apollo;
var BaseCamp;
var FINISHED;
var DIFICULTY = 3

function setup() {
  console.log(window)
  createCanvas(800, 600);
  Apollo = new Ship()
  BaseCamp = new landingArea()
  FINISHED = false
}

function draw() {
  background(51);

  Apollo.show()
  BaseCamp.show()

  if(Apollo.dead){
    FINISHED = true
  }

  if(!FINISHED){
    Apollo.update()
    this.handleKeyDown()
    this.detectLanding()
  }
}

function keyPressed() { 
  if(keyCode === 32){ // SPACE
    this.setup()
  }
}

 function detectLanding() {

   const { x: ApolloX , y: ApolloY, width: ApolloW, height: ApolloH } = Apollo
   const { x: BaseCampX , y: BaseCampY, width: BaseCampW, height: BaseCampH } = BaseCamp


  const shipMiddleX = ApolloX + ApolloW/2
  const baseCampMiddleX = BaseCampX + BaseCampW/2

  const yDistance = Math.abs(BaseCampY - (ApolloY + ApolloH) )
  const xDistance = Math.abs(shipMiddleX - baseCampMiddleX)

  if(xDistance < 10){
    if(yDistance < 1){
      if(Apollo.yspeed > (DIFICULTY * -1)){
        FINISHED = true
      } else {
        Apollo.die()
      }
      console.log("FINISHED") 
      FINISHED = true
    }
  }
}

function handleKeyDown() { 
  if (keyIsDown(LEFT_ARROW)) {
    Apollo.throttleLeft(LEFT_ARROW)
  }

  if (keyIsDown(RIGHT_ARROW)) {
    Apollo.throttleRight(RIGHT_ARROW)
  }

  if (keyIsDown(UP_ARROW)) {
    Apollo.throttleUp(UP_ARROW)
  }
}

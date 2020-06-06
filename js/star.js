function Star() {
this.x = random(0,width)
this.y = random(0, height)

  this.show = function () {
    push()
    strokeWeight(3)
    stroke('white');
    point(this.x, this.y)
    pop()
  }

  this.reborn = function (){
    this.x = random(0,width)
    this.y = random(0, height)
  }
}
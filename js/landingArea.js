function landingArea() { // check for newer sintax
  this.x = random(0,width)
  this.y = 50
  this.width = 50
  this.height = 5

  this.show = function () {
    push()
    fill('green');
    rect(this.x, this.y, this.width, this.height)
    pop()
  }
}
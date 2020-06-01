function landingArea() { // check for newer sintax
  this.x = 100
  this.y = height - 150
  this.width = 60
  this.height = 5

  this.show = function () {
    fill('green');
    rect(this.x, this.y, this.width, this.height)
  }
}
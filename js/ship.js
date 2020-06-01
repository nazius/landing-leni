function Ship() {
  this.width = 20
  this.x = width / 2 - this.width/2
  this.y = height / 4
  this.dead = false
  this.xspeed = 0
  this.yspeed = 0
  this.height = 40
  this.topSpeed = 5

  // todo: global variable
  this.gravity = 0.1
  this.drag = 0.9

  this.update = function () {
    if (!this.dead) {
      this.yspeed = this.yspeed - this.gravity
      this.x = this.x + this.xspeed
      this.y = this.y - this.yspeed
      this.checkCollision()
    }
  }

  this.show = function () {
    fill(255);
    if (this.dead) {
      fill('red');
    }
    rect(this.x, this.y, this.width, this.height)
  }

  this.throttleUp = function () {
    if (this.yspeed < this.topSpeed) {
      this.yspeed = this.yspeed + 1
    }
  }

  this.throttleRight = function () {
    this.xspeed = this.xspeed + 0.3
  }

  this.throttleLeft = function () {
    this.xspeed = this.xspeed - 0.3
  }

  this.die = function () {
    this.dead = true
  }

  this.checkCollision = function () {
    if (this.x < 0) {
      this.x = width
    }
    if (this.x > width) {
      this.x = 0
    }
    if (this.y > height - 40) {
      this.die()
    }
  }


}
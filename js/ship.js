function Ship() {
  this.width = 20
  this.x = width / 2 - this.width/2
  this.y = height / 4
  this.dead = false
  this.xspeed = 0
  this.yspeed = 0
  this.height = 40
  this.topSpeed = 5
  this.fuel = 100

  // todo: global variable
  this.gravity = 0.1
  this.drag = 0.9

  this.update = function () {
    push()
      stroke('green')
      strokeWeight(3)
      text(`FUEL: ${this.fuel}`, 10, 10, 70, 80);
    pop()

    if (!this.dead) {
      this.yspeed = this.yspeed - this.gravity
      this.x = this.x + this.xspeed
      this.y = this.y - this.yspeed

      this.checkCollision()
    }
    if(this.fuel <0){
      this.die()
    }
  }

  this.show = function () {
    if (this.dead) {
      explosionGif = createImg('https://res.cloudinary.com/dlw5iqglu/image/upload/c_scale,w_56/v1591252128/leni/explosion.gif')
      explosionGif.position(this.x,this.y)
      noLoop()
      setTimeout(() => {
        explosionGif.remove()
      }, 500);
    } else if (FINISHED) {
      image(leniImage, this.x, this.y);
    } else {
      image(spaceShipImage, this.x, this.y);
    }
  }

  this.throttleUp = function () {
    this.fuel = this.fuel - 1
    if (this.yspeed < this.topSpeed) {
      this.yspeed = this.yspeed + 1
    }
  }

  this.throttleRight = function () {
    this.fuel = this.fuel - 1
    this.xspeed = this.xspeed + 0.3
  }

  this.throttleLeft = function () {
    this.fuel = this.fuel - 1
    this.xspeed = this.xspeed - 0.3
  }

  this.die = function () {
    this.dead = true
  }

  this.checkCollision = function () {
    if (this.x < - 45) {
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
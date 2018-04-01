var s = function(sketch) {

  let stars = []

  sketch.setup = function() {
    document.body.style['userSelect'] = 'none';
    let h = document.body.clientHeight;
    // let pg = sketch.createGraphics(sketch.windowWidth, sketch.windowHeight)
    let c = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
    c.position(0, 0);
    c.style('pointer-events', 'none');
    sketch.clear();
    let numStars = Math.floor(sketch.random(100,200))
    for (let i = 0; i <= numStars; i++){
      let star = new Star(sketch.random(0, sketch.windowWidth), sketch.random(0, sketch.windowHeight), sketch.random(5,20), sketch.random(100, 255), sketch.random(100, 255), sketch.random(100, 255), 100)
      stars.push(star)
    }
    // stars.forEach(star => {
    //   console.log(star)
    // })
  }

  sketch.draw = function() {
    sketch.clear()
    stars.forEach(star => {
      // star.checkParticles()
      star.particles.forEach(particle => {
        particle.show()
        particle.update()
      })
    })
  }

  sketch.mousePressed = function(){
    let star = new Star(sketch.mouseX, sketch.mouseY)
    star.createParticles()
    console.log(star)
    stars.push(star)
  }

  class Star{
  constructor(x, y){
    this.x = x
    this.y = y
    this.numParticles = Math.floor(sketch.random(3, 7))
    this.particles = []
    this.color = Math.floor(sketch.random(0, 3))
    }

    createParticles(){
      for(let i = 0; i < this.numParticles; i++){
        let newParticle = new Particle(this.x, this.y, sketch.random(5,10), sketch.random(0, 2 * 3.14), this.color)
        this.particles.push(newParticle)
    }
  }

  // checkParticles(){
  //   this.particles.forEach(particle => {
  //     if(particle.alpha < 0){
  //       this.particles.splice(this.particles.indexOf(particle), 1)
  //     }
  //   })
  // }
}

class Particle{
  constructor(x, y, radius, direction, color){
    this.x = x
    this.y = y
    this.color = color
    if (this.color === 0){
      this.r = sketch.random(0, 20)
      this.g = sketch.random(200, 255)
      this.b = sketch.random(80, 100)
    } else if (this.color === 1){
      this.r = sketch.random(0, 40)
      this.g = sketch.random(100, 150)
      this.b = sketch.random(200, 255)
    } else if (this.color === 2){
      this.r = sketch.random(12, 32)
      this.g = sketch.random(200, 255)
      this.b = sketch.random(240, 255)
    }

    this.alpha = 255
    this.direction = sketch.random(0, 2 * 3.14)
    this.radius = sketch.random(20, 50)
    this.gravity = this.radius * -0.445
    this.xSpeed = sketch.random(-5, 5)
    this.ySpeed = sketch.random(-5, 5)
    this.acceleration = 2
    this.alphaDecrease = 5
  }

  show(){
    sketch.noStroke()
    sketch.fill(this.r, this.g, this.b, this.alpha)
    sketch.ellipse(this.x, this.y, this.radius)
  }

  update(){
    // console.log(this.y)
    // console.log("windowHeight")
    // console.log(sketch.windowHeight)
    if(this.y >= sketch.windowHeight - this.radius){
      this.y = sketch.windowHeight - (this.radius/2)
    }else{
      sketch.push()
      sketch.rotate(this.direction)
      this.x += this.xSpeed
      this.y += this.ySpeed
      sketch.pop()
      this.y -= this.gravity
      // this.alpha -= this.alphaDecrease
      if (this.xSpeed > 4){
        this.xSpeed -= this.acceleration
      }
      // if (this.ySpeed > 4){
      //   this.ySpeed -= this.acceleration
      // }

    }
  }
}


  // class Star{
  //   constructor(x, y, radius, r, g, b, alpha){
  //     this.x = x
  //     this.y = y
  //     this.radius = radius
  //     this.r = r
  //     this.g = g
  //     this.b = b
  //     this.alpha = 255
  //     this.alphaMod = 1
  //   }
  //
  //   show(){
  //     sketch.noStroke()
  //     sketch.fill(this.r, this.g, this.b, this.alpha)
  //     sketch.ellipse(this.x, this.y, this.radius - (this.radius*.75))
  //
  //     sketch.noStroke()
  //     sketch.fill(this.r, this.g, this.b, this.alpha * .75)
  //     sketch.ellipse(this.x, this.y, this.radius - (this.radius*.5))
  //
  //     sketch.noStroke()
  //     sketch.fill(255, this.alpha * .5)
  //     sketch.ellipse(this.x, this.y, this.radius)
  //   }
  //
  //   update(){
  //     this.alphaMod = this.alphaMod % 255
  //     if (this.alphaMod === 0){
  //       this.alphaMod = 1
  //     }
  //     this.alpha = this.alphaMod
  //     this.alphaMod += 1
  //   }
  // }
};


var myp5 = new p5(s);

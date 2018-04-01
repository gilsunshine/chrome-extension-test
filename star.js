// class Star{
//   constructor(x, y, radius, r, g, b, a){
//     this.x = x
//     this.y = y
//     this.radius = radius
//     this.r = r
//     this.g = g
//     this.b = b
//     this.a = a
//     this.alphaIt = 0
//   }
//
//   show(){
//     noStroke()
//     fill(this.r, this.g, this.b, this.a)
//     ellipse(this.x, this.y, this.radius - (radius*.75))
//
//     noStroke()
//     fill(this.r, this.g, this.b, this.a * .75)
//     ellipse(this.x, this.y, this.radius - (radius*.5))
//
//     noStroke()
//     fill(255, this.a * .5)
//     ellipse(this.x, this.y, this.radius)
//   }
//
//   update(){
//     let alphaMod = this.alphaIt % 1
//     this.a *= alphaMod
//     this.alphaIt += .1
//   }
// }

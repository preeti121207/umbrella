class Umbrella {
    constructor(x,y, radius) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      this.image = loadImage("boy.png");
      World.add(world, this.body);
    }
    display(){

        push();
        translate(this.body.position.x, this.body.position.y);
      
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius);
        pop();
      }
  };
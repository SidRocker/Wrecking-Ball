/*class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
    Matter.Body.setDensity(this.body,2);
      }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}*/

class Ball{
  constructor(x, y, r) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':3.0
      }
      this.body = Bodies.circle(x, y, r, options);
      this.radius = r;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;

      push();
      fill("lightgreen");
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      ellipseMode(RADIUS);
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
}

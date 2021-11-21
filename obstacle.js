class obstacle {
    constructor(x, y) {
      var options = {
        isStatic: true
      };
      this.r = 30;
      this.speed = 0.01;
      this.body = Bodies.circle(x, y, this.r, options);
      this.image = loadImage("noobobstacle.png");
      this.animation = [this.image];
      this.trajectory = [];
      this.isSink = false;
      World.add(world, this.body);
    }
    shoot() {
        var newSpawn = cannon.spawn - 28;
        newSpawn = newSpawn *(3.14/180)
        var velocity = p5.Vector.fromSpawn(newSpawn);
        velocity.mult(0.5);
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, {
          x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});
      }
  }
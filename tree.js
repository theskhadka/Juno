class Tree{
    constructor(x, y) {
        var options = {
            isStatic: true,
        }
        this.body = Bodies.rectangle(x, y, 100, 100, options);
        this.image = loadImage("sprites/tree.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 600, 600);
        pop();
      }
}
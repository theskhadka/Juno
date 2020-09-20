class Mango{
    constructor(x, y) {
        var options = {
            isStatic: true,
            restitution:0,
            friction:1.0,
        }
        this.body = Bodies.rectangle(x, y, 25, 25, options);
        this.x = x;
        this.y = y;
        this.image = loadImage("sprites/mango.png");
        World.add(world, this.body);
      }
      display(){
        imageMode(CENTER);
        image(this.image, this.x, this.y, 50, 50);
      }
}
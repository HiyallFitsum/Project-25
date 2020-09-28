class Dustbin{
    constructor() {
      var options = {
          isStatic: true,
          //density: 0,
      }
      this.bottombody = Bodies.rectangle(1000, height-145, 250, 300, options);
      this.bottombody.width = 200;
      this.bottombody.height = 250;

      this.leftBody = Bodies.rectangle(900, height-85, 20, 200, options);
      this.leftBody.width = 20;
      this.leftBody.height = 200;

      this.rightBody = Bodies.rectangle(1100, height-85, 20, 200, options);
      this.rightBody.width = 20;
      this.rightBody.height = 200;

      World.add(world, this.bottombody);
      World.add(world, this.leftBody);
      World.add(world, this.rightBody);

      this.image = loadImage("dustBin1.png");
    }
    display(){

      var posBottom=this.bottombody.position;
			var posLeft=this.leftBody.position;
			var posRight=this.rightBody.position;

      push()
      //translate(posLeft.x, posLeft.y);
      translate(posBottom.x, posBottom.y);
			imageMode(CENTER)
			//strokeWeight(4);
			//fill(255)
     // rotate(this.angle)
      image(this.image, 0,0, this.bottombody.width, this.bottombody.height)
      //image(this.image, 0,0, this.rightbody.width, this.rightbody.height)
			//image(this.image, 0,0, this.leftBody.width, this.leftBody.height);
      pop()
      
      

      
      
      
    }
  };
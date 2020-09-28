class Paper extends BaseClass{
  constructor(x,y){
    super(x,y,70,70);
    this.image = loadImage("crumpledPaper2.png");
   }
 display(){
    
  super.display();
}
}

//class Paper{
  //constructor(x, y,) {
    //var options = {
       //isStatic:false,
        //restitution:0.3,
        //friction:0.5,
        //density:0.5
    //}
    //this.body = Matter.Bodies.circle(x, y, 50, options);
    //this.diameter = 50;
    //this.image = loadImage("crumpledPaper1.png");
    //World.add(world, this.body);
  //}
  //display(){
    //var pos =this.body.position;
    //var angle = this.body.angle;
    //push();
    //translate(pos.x, pos.y);
    //rotate(angle);
    //imageMode(CENTER);
    //strokeWeight(4)
    //stroke("green");
    //fill(255);
    //image(this.image, pos.x, pos.y, this.diameter, this.diameter);
    //pop();
  //}
//};


//class Paper{
  //constructor(x, y, width, height) {
    //var options = {
        //isStatic:false,
        //restitution:0.3,
        //friction:0.5,
        //density:1.2
    //}
    //this.body = Bodies.rectangle(x, y, width, height, options);
    //this.width = width;
    //this.height = height;
    //this.body = Matter.Bodies.circle(x, y, 20, options);
    //this.diameter = 20;
    //this.image = loadImage("crumpledPaper1.png");
    //World.add(world, this.body);
  //}
  //display(){
    //var pos =this.body.position;
    //var angle = this.body.angle;
    //push();
    //translate(pos.x, pos.y);
    //rotate(angle);
    //imageMode(CENTER);
    //ellipseMode(CENTER);
    //ellipse(0, 0, this.diameter);
    //image(this.image, 0, 0, this.diameter);
    //image(this.image, 0, 0, this.width, this.height);
    //pop();
  //}
//}
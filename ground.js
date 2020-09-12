class Ground{
  constructor(x,y,width,height){
    var options = {
        isStatic: true

    }
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x,y,width,height,options);

    World.add(world,this.body);

  }
  display(){
     var gd = this.body.position;
     rectMode(CENTER);
     fill ("green");
     rect(gd.x,gd.y,this.width,this.height);
     



  }

}
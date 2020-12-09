class dustbinwall{
    constructor(x,y,width,height){
    var options = {
        isStatic:true
    }
    this.dustbin=Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.dustbin);
    this.width=width;
    this.height=height;
    }
    display(){
        rectMode(CENTER);
       
        rect(this.dustbin.position.x,this.dustbin.position.y,this.width,this.height);
        
    }
}
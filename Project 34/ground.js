class Ground{
cronstructor(x,y,width,height) {

    var  Options= {
    istatic= true
}
this.body = bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
world.add(world,this.bodies)
}
display(){
    var pos = this.body,position;
    rectangle(CENTER);
    Fill(225);
    rect(pos.x,pos.y, this.width,this.height);

}
}
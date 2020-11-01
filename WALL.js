class Wall {
    constructor(x,y,width,height) {
        var box_option = {isStatic:true};

        this.body = Bodies.rectangle(x,y,width,height,box_option);
        this.width = width;
        this.height = height;

        World.add(world,this.body);

    }
    display() {
        var pos = this.body.position;
        rect(pos.x,pos.y,this.width,this.height);
       

    }


}
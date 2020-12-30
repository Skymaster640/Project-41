class Drops{
    constructor(x,y){
        var options = {
            'friction': 0
        }




        this.body = Bodies.circle(x,y,this.radius);
        this.x = x;
        this.y = y;
        this.radius=10;
    }


    update(){

        if(this.y = 600){

            this.y=0;
        }
    }


    createDrops(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(this.x,this.y,this.radius,this.radius);
        pop();
    }
}
class Umbrella {
    constructor(x,y,width,height) {
        var options = {
            isStatic:false
        }



        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        this.image = ("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
    }







    display(){


        image(this.image)
    }
}
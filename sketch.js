const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var maxDrops=100;
var drops;
var boy;

function preload(){
    
}

function setup(){
   createCanvas(400,600)

   boy = new Umbrella(200,300,10,10);
    
}

function draw(){
    background(0);


    for(var i=0; i<maxDrops; i++){
        drops.push(new createDrop(random(0,400), random(0,400)));
    }

drops.display();
boy.display();

}   


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;



function setup(){
   var canvas = createCanvas(400,600)
   background("black");
   
    engine = Engine.create();
    world = engine.world;



    umbrella = new Umbrella(200,200,30);

    
}

function draw(){

umbrella.display();
}   


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16;
var ball;
var slingshot;
var gameState = "unLaunched";


function setup(){
    var canvas = createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(750,height,1500,20);
    platform = new Ground(1000, 450, 330, 15);

    //making blocks for the tower
    b1 = new Box(1000, 430, 50, 40);
    b2 = new Box(1060,430,50,40);
    b3 = new Box(940,430,50,40)
    b4 = new Box(1120,430,50,40);
    b5 = new Box(880,430,50,40);

    b6 = new Box(1030,380,50,40);
    b7 = new Box(970,380,50,40);
    b8 = new Box(910,380,50,40);
    b9 = new Box(1090,380,50,40);

    b10 = new Box(1000,330,50,40);
    b11 = new Box(1060,330,50,40);
    b12 = new Box(940,330,50,40);

    b13 = new Box(1030,280,50,40);
    b14 = new Box(970,280,50,40);

    b15 = new Box(1000,230,50,40);

    ball = new Ball(300,350,30);


    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(ball.body,{x:200, y:50});
}

function draw(){
        background("lightblue");
    
        //noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
    
    ground.display();
    platform.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();

    b6.display();
    b7.display();
    b8.display();
    b9.display();

    b10.display();
    b11.display();
    b12.display();

    b13.display();
    b14.display();

    b15.display();

    ball.display();


    slingshot.display();  
    
    b1.score();
    b2.score();
    b3.score();
    b4.score();
    b5.score();
    b6.score();
    b7.score();
    b8.score();
    b9.score();
    b10.score();
    b11.score();
    b12.score();
    b13.score();
    b14.score();
    b15.score();

}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}
/*
function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(bird.body, {x: 200, y: 50});
       slingshot.attach(bird.body);
       bird.trajectory = [];
       gameState = "onSling";
    }
}
*/

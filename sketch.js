var canvas;
var music;
var box1,box2,box3,box4;
var ball;
var edge1,edge2,edge3,edge4

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
box1 = createSprite(100,550,190,25);
box1.shapeColor = ("red");

box2 = createSprite(300,550,190,25);
box2.shapeColor = ("purple");

box3 = createSprite(500,550,190,25);
box3.shapeColor = ("yellow");

box4 = createSprite(700,550,190,25);
box4.shapeColor = ("green");

    //create box sprite and give velocity

ball = createSprite(100,500,50,50);
ball.velocityX = 20;
ball.velocityY = 20;

edge1 = createSprite(400,585,800,20);
edge1.shapeColor = ("black");

edge2 = createSprite(5,290,15,580);
edge2.shapeColor = ("orange");

edge3 = createSprite(795,290,15,580);
edge3.shapeColor = ("blue");
   

edge4= createSprite(400,5,800,20);
edge4.shapeColor = ("brown");



}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite



    //add condition to check if box touching surface and make it box


if(ball.isTouching(box1)&& ball.bounceOff(box1)){
    ball.shapeColor = ("red")
}


if(ball.isTouching(box2)&& ball.bounceOff(box2)){
    ball.shapeColor = ("purple")
}


if(ball.isTouching(box3)&& ball.bounceOff(box3)){
    ball.shapeColor = ("yellow")
}


if(ball.isTouching(box4)&& ball.bounceOff(box4)){
    ball.shapeColor = ("green")
}


if(ball.isTouching(edge2)&& ball.bounceOff(edge2)){
    ball.shapeColor = ("orange")
}


if(ball.isTouching(edge3)&& ball.bounceOff(edge3)){
    ball.shapeColor = ("blue")
}


if(ball.isTouching(edge4)&& ball.bounceOff(edge4)){
    ball.shapeColor = ("brown")
}

    drawSprites();

}

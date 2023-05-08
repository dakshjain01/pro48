var player1,player2;
var bg,ast,met;
var player1_img,player2_img;
var ast_img,met_img;
var timer = 0;
var boom

function preload()
{
  player1_img = loadImage("player1.png");
  player2_img = loadImage("player2.png");
  ast_img = loadImage("asteorid.png");
  met_img = loadImage("meteorite.png");
  bg = loadImage("background.jpg");
  boom = loadImage("boom.jpg")

}

function setup(){
    createCanvas(windowWidth,windowHeight);
    
    player1 = createSprite(300,200,50,50);
    player1.addImage(player1_img);
    player1.scale = 0.8;
    player1.debug = true;
    player1.setCollider("rectangle",0,0,400,400);

    player2 = createSprite(700,400,50,50);
    player2.addImage(player2_img);
    player2.scale = 0.8;

    
    met = createSprite(random(100,1200),10,100,100);
    met.addImage(met_img);
    met.scale = 0.7;
    met.velocityY = 5;
    

    ast = createSprite(random(100,1200),10,100,100);
    ast.addImage(ast_img);
    ast.scale = 0.7;
    ast.velocityY = 5;

    

}

function draw(){
    background(bg);

    player1.velocityY = -0.5;
    player2.velocityY = -0.5;


   
    textSize(25);
    fill("yellow")
    text("Time Survived:"+timer,1100,50);

    

    if(keyDown("RIGHT_ARROW")){
        player1.x += 10;
    }

    if(keyDown("LEFT_ARROW")){
        player1.x -= 10;
    }

    if(keyDown("S")){
        player2.x += 10;
    }

    if(keyDown("A")){
        player2.x -= 10;
    }
    
    if(player1.collide(met)){
        //player1.changeImage(boom);
        player1.destroy();
    }

    if(player1.collide(ast)){
        //player1.changeImage(boom);
        player1.destroy();
    }

    if(player2.collide(ast)){
       // player2.changeImage(boom);
        player2.destroy();
    }

    if(player2.collide(met)){
       // player2.changeImage(boom);
        player2.destroy();
    }


    
   
    drawSprites();

}
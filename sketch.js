var button;
var y =100;
var myFont;
var ship;
var enemys = [];
var bullets = [];

function preload() {
    //myFont = loadFont('https://fonts.googleapis.com/css?family=Astloch');
}

function setup() {
    createCanvas(640, 480);
    //textFont(myFont);
    stroke(0, 128, 0);
    frameRate(30);
    ship = new Ship();
    //bullets = new Bullets(width/2,height/2);
    for (var i = 0;i < 7; i++) {
        enemys[i] = new Enemy(i*80+80,60);
    }
}
state = 0;

function draw() {
    if(state == 0) {
        drawStartScreen();
    }else if(state ==1){
        background(0);
        ship.show();
        ship.move();
        //bullets.show();
        //bullets.move();
        console.log(bullets.length);
        for(var j = 0; j< bullets.length;j++){
            bullets[j].show();
            bullets[j].move();
            for (var i = 0;i < enemys.length; i++) {
                if(bullets[j].hits(enemys[i])){
                    enemys[i].destroy();
                    bullets[j].vanish();
                    //console.log("KHABOEM!!!!!");
                }
            }
        }

        var edge = false;
        for (var i = 0;i < enemys.length; i++) {
            enemys[i].show();
            enemys[i].move();
            if(enemys[i].x > width || enemys[i].x < 0){
                edge = true;
            }
        }

        if(edge){
            for(var i = 0; i < enemys.length; i++){
                enemys[i].shiftDown();
            }
        }

        for(var j = 0; j < bullets.length; j++){
            if(bullets[j].toDelete){
                bullets.splice(j , 1);
            }
        }
    }
}


function drawStartScreen(){
    background(0);
    textSize(25);
    fill(255,255,255);
    text('Press ENTER to continue',165,330);
    textSize(64);
    fill(0,128,0);
    text('Space Invaders', 100,120);
    y = y-1;
    if(y < 0){
        y = height;
    }
    line(0, y, width,y);
    if(keyCode === ENTER) {
        state = 1;

    }
}

function keyReleased (){
    if(key != ' '){
      ship.setDirection(0);
   }
}

function keyPressed() {
    if(key === ' '){
        var bullet = new Bullets(ship.x +10, height -21);
        bullets.push(bullet);
    }
    if(keyCode === RIGHT_ARROW){
         ship.setDirection(1);
    }else if(keyCode === LEFT_ARROW){
        ship.setDirection(-1);
    }
}
// Battleship settings
function Ship(){
    this.x = width/2;      // start the ship in middle of the screen width wise
    this.xDirection = 0;

    this.show = function (){       //The ship it self
        fill(0,128,0);              // Color of the ship
        rect(this.x, height -20,20,20); //Shape of the ship
    }

    this.setDirection = function(direction){
        this.xDirection = direction;
    }

    this.move = function (direction) { // Set the movement point every time user clicks on left/right arrow
        this.x += this.xDirection *  5;
    }
}
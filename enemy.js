//Enemy settings
function Enemy(x,y){
        this.x = x;      // startingpoint of the enemy in middle of the screen
        this.y = y;
        this.r = 30;   //radius

        this.xdirection = 1;

        this.destroy = function(){
            this.r = this.r -2;
    }

    this.shiftDown = function () {
        this.xdirection *= -1;
        this.y += this.r;
    }
    
    this.move = function(){
        this.x = this.x + this.xdirection;
    }

        this.show = function (){       //The enemy it self
            fill(255);          //Color of the enemy
            ellipse(this.x, this.y,this.r*2,this.r*2); //Shape of the enemy
        }
    }

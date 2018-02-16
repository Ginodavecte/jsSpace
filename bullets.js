//Enemy settings
function Bullets(x,y){
    this.x = x;      // startingpoint of the enemy in middle of the screen
    this.y = y;
    this.r = 8;    //radius
    this.toDelete = false;

    this.show = function (){       //The bullets function
        noStroke();
        fill(255);          //Color of the bullets
        ellipse(this.x, this.y,this.r*2,this.r*2); //Shape of the bullets
    }

    this.vanish = function(){
        this.toDelete = true;
    }

    this.hits = function(enemy){
        var distance = dist(this.x, this.y, enemy.x, enemy.y);
        if(distance < this.r + enemy.r){
            return true;
        }else{
            return false;
        }
    }

    this.move = function (){
        this.y = this.y -8;
    }

}

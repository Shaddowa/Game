//All the classes and functions
var worlds = ["Fire", "Earth", "water", "wind"];
class world {
    constructor(lvl, name) {

        this.lvl = lvl;
        this.name = name;

    }
}

class entity {
    constructor(img, xPosition, yPosition, width, height,ySpd, gravity, weight, CurrentHp, damage, name) {
        this.sprite = new Image();
        this.sprite.src = img;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.xSpd = 0;
        this.ySpd = 0;
        this.width = width;
        this.height = height;
        this.gravity = gravity;
        this.weight = weight;
        this.CurrentHp = CurrentHp;
        this.damage = damage;
        this.name = name;

        this.collitionGround = function (obj) {
            if (this.xPosition > obj.xPosition + obj.width) {
                return false;
            }
            else if (this.xPosition + this.width < obj.xPosition) {
                return false;
            }
            else if (this.yPosition > obj.yPosition + obj.height) {
                return false;
            }
            else if (this.yPosition + this.height < obj.yPosition) {
                return false;
            }
            return true;
        }

        this.collitionEnemy = function(enemy){
            if(this.xPosition > enemy.xPosition + enemy.width){
                return false;
            }
            else if(this.xPosition< enemy.xPosition){
                return false;
            } 
            else if(this.yPosition > enemy.yPosition + enemy.height){
                return false;
            }
            else if(this.yPosition + this.heigt < enemy.yPosition){
                return false;
            }
            return true;
        }

        this.collitionCollectable = function(collectable){
            if (this.xPosition > collectable.xPosition + collectable.width) {
                return false;
            }
            else if (this.xPosition + this.width < collectable.xPosition) {
                return false;
            }
            else if (this.yPosition > collectable.yPosition + collectable.height) {
                return false;
            }
            else if (this.yPosition + this.height < collectable.yPosition) {
                return false;
            }
            return true;
        }

        function entityLoss() {

            //if the player dies


            // Collectables are not being saved
            collectable.Current = collectable.Current - collectable.CurrentGame;
        }

        function entityWin() {

            //if the player accomplishes the lvl
            collectable.Current = collectable.Current + collectable.CurrentGame;

        }
    }
}

class collectable {
    constructor(img, xPosition, yPosition, width, height){
        this.sprite = new Image();
        this.sprite.src = img;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.width = width;
        this.height = height;
       
    }
}

class blocks {
    constructor(img, xPosition, yPosition, width, height, damage){
        this.sprite = new Image();
        this.sprite.src = img;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.width = width;
        this.height = height;
        this.damage = damage;
    }
}





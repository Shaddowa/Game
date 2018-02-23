//All the classes and functions
var worlds = ["Fire", "Earth", "water"];
class world {
    constructor(lvl, name) {

        this.lvl = lvl;
        this.name = name;

    }
}

class entity {
    constructor(img, xPosition, yPosition, width, height, ySpd, gravity, weight, CurrentHp, damage, name) {
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

        this.collitionObject = function (obj) {
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




        this.entityLoss = function () {
            //if the player dies
            //Collectables are not being saved;
            //
            //collectable.Current = collectable.Current - collectable.CurrentGame;
        }



        this.entityWin = function () {

            //if the player accomplishes the lvl
            //collectable.Current = collectable.Current + collectable.CurrentGame;


        }
    }
}


//Collectable class (Carrots and coins)

class collectable {
    constructor(img, xPosition, yPosition, width, height) {
        this.sprite = new Image();
        this.sprite.src = img;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.width = width;
        this.height = height;

    }
}

//Block/ Ground Class

class blocks {
    constructor(img, xPosition, yPosition, width, height) {
        this.sprite = new Image();
        this.sprite.src = img;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.width = width;
        this.height = height;
        this.damage = 0;
        this.speed = 0;
        this.jump = 0;
    }
}

//BulletsClass

class bullets {
    constructor( xPosition, yPosition, xSpd, damage, direction) {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.xSpd = xSpd;
        this.damage = damage;
        this.direction = direction;
    }
}




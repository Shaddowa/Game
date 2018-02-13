//All the classes and functions
var worlds = ["Fire", "Earth", "water", "wind"];
class world {
    constructor(lvl, name) {

        this.lvl = lvl;
        this.name = name;

    }
}

class entity {
    constructor(xPosition, yPosition, xSpd, ySpd, CurrentHp, maxHp, damage, name) {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.xSpd = xSpd;
        this.ySpd = ySpd;
        this.CurrentHp = CurrentHp;
        this.maxHp = maxHp;
        this.damage = damage;
        this.name = name;
        
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


class object {
    constructor(xPosition, yPosition, xSpd, ySpd, damage, name){ 
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.xSpd = xSpd;
        this.ySpd = ySpd;
        this.damage = damage;
        this.name = name;
    }
}

var collectable = {
    Total : 100,
    Current : 0,
    CurrentGame : 0
   
}


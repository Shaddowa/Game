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
/*
        this.kollisjon2 = function (obj) {
            //lager to vektorer , plusser ob1.width og height, og med ob2.width og heigt får å måe vektoren fra sentrum

            var vx = ((this.xPosition + (this.width / 2) - (obj.xPosition + (obj.width / 2))));
            var vy = ((this.yPosition + (this.height / 2) - (obj.yPosition + (obj.height / 2))));
            //halv bredde og høyde vil bli midtpunkten i hver objekt
            var halfwidth = ((this.width + obj.width) / 2);
            var halfheight = (this.height / 2) + (obj.height / 2);
            var kollisjonpo = null;
            var ox = halfwidth - Math.abs(vx);
            var oy = halfheight - Math.abs(vy);


            //hvis lengden av vektorene(altså lengden mellom objektenes sentrum) er mindre enn summen av halwidth og halfheight i begge objektene så kolliderer de
            if (Math.abs(vx) < halfwidth && Math.abs(vy) < halfheight) {
                if (ox >= oy) {
                    if (vy > 0) {
                        kollisjonpo = "topp";
                        obj.yPosition += oy;
                    } else {
                        kollisjonpo = "bunn";
                        obj.yPosition -= oy;
                    }
                    if (vx > 0) {
                        kollisjonpo = "venstre";
                        obj.yPosition += ox;
                    } else {
                        kollisjonpo = "hoyre";
                        obj.yPosition -= ox;

                    }


                }
                return kollisjonpo;


            }
        }



*/
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
    constructor(xPosition, yPosition, xSpd, damage, direction) {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.xSpd = xSpd;
        this.damage = damage;
        this.direction = direction;
    }
}




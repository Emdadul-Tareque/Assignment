// problem no: 01 (feetToMile)

function feetToMile(feet){
    if (feet > 0){
       
        var mile = feet * 0.000189394;
        return mile;
    }
    else{
         console.log("Feet should not be a negative number!! please enter a valid number.")
    }
}

var mile = feetToMile(-1)
console.log(mile)
var mile = feetToMile(110)
console.log(mile)

//Problem no: 2 (woodCalculator)

function woodCalculator(chair, table, bed){
    var totalWood = ((1*chair) + (3*table) + (5*bed));
    return totalWood;
}

totalWood = woodCalculator(2, 1, 3);
console.log(totalWood);

//Problem no: 3(brickCalculator)

function brickCalculator(floor){

    if(floor <= 10){
        bricks = floor * 15 * 1000;
    }
    else if(floor > 10 && floor <= 20){
        floor = floor - 10;
        bricks = ((10 * 15 * 1000) + (floor * 12 * 1000));
    }
    else{
        floor = floor - 20;
        bricks = ((10 * 15 * 1000) + (10 * 12 * 1000) + (floor * 10 * 1000));
    }
    return bricks;
}

numOfBricks = brickCalculator(35)
console.log(numOfBricks);

// Problem no: 4 (tinyFriend)

function tinyFriend(name){
    var len = name.length;

    for(var i = 0; i<len-1; i++){

        if ((name[i].length) < (name[i+1].length)){

            var tinyName = name[i];

        }
        else{
            var tinyName = name[i+1];
        }
        
        
    }

    return tinyName;
}

var friendName= ['Emdadul',  'Hoque', 'tareque', 'taru',];
var name = tinyFriend(friendName);
console.log(name);
// x,y -> if the point is in the circle K({0,0}, 2)

function enterPoints(){

    let pointX = prompt("X: ");
    let pointY = prompt("Y: ");

    checkPosition(pointX, pointY);
}

function checkPosition(pointX, pointY) {

    //circle center: (0,0), radius: 2
    let radius = 2;
    let squaredRadius = Math.pow(radius, 2);

    let pointXint = Number(pointX);
    let pointYint = Number(pointY);

    let squaredX = Math.pow(pointXint, 2);
    let squaredY = Math.pow(pointYint, 2);

    console.log("Squared X: ", Math.pow(pointXint, 2));
    // console.log(Math.pow(pointX) + Math.pow(pointY) < radius^2);
    console.log(squaredX, squaredX, squaredX + squaredY < squaredRadius);

    let squaredSum = squaredX + squaredY;
    //distance from the beginning to the given point;
    let distance = Math.round(Math.sqrt(squaredSum)*100)/100;

    if(squaredSum < radius^2){
        console.log("yes ", distance);
    }
    else{
        console.log("no ", distance);
    }

}

enterPoints();
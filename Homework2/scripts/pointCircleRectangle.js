// by given pair of x, y -> check if a given point is in the circle K and out of the rectangle R
// K({1, 1}, 1.5), R(1,-1, 6, 2);

function enterValues(){

    let x = prompt("x: ");
    let y = prompt("y: ");

    let point = [x,y];

    checkInCircleOutRectangle(point);
}

function checkInCircleOutRectangle(point) {

    debugger;

    let x = Number(point[0]);
    let y = Number(point[1]);

    let circleRadius = 1.5;
    let top = 1;
    let left = -1;
    let right = 6;
    let rightPositive = right - Math.abs(left);

    if (x > -1000 && x < 1000 && y > -1000 && y < 1000) {

        if (Math.pow(x, 2) + Math.pow(y, 2) < Math.pow(circleRadius, 2)) {
            console.log("Inside circle!");
        }
        else {
            console.log("Outside circle");
        }

        if (x >= left && x <= rightPositive && y >= left && y <= top) {
            console.log("Inside rectangle!");
        }
        else {
            console.log("Outside rectangle!");
        }

    }
}


enterValues();
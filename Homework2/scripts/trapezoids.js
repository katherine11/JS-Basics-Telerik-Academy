//calculate trapezoid area by given a,b,h:
function enterValues(){

    let a = prompt("a: ");
    let b = prompt("b: ");
    let h = prompt("h: ");

    let values = [a,b,h];
    calculateArea(values);

}

function calculateArea(values){

    let a = Number(values[0]);
    let b = Number(values[1]);
    let h = Number(values[2]);

    let validNumbers = a > -500 && a < 500 && b > -500 && b < 500 && h > -500 && h < 500;

    if(validNumbers){
        //floating point with a 7-digit precision!
        let area = ((a+b)/2)*h;
        console.log("Trapezoid area: ", area.toFixed(7));
    }
}

enterValues();
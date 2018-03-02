function enterRectangleValues(){

    let values = [];

    values[0] = prompt("Width: ");
    values[1] = prompt("Height: ");

    calculateArea(values[0], values[1]);
    calculatePerimeter(values[0], values[1]);

}

function calculateArea(width, height){

    let area = width*height;
    console.log(area);

}

function calculatePerimeter(width, height){

    let perimeter = 2*width + 2*height;
    console.log(perimeter);
}

enterRectangleValues();
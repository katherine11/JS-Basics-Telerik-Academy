//print matrix by a given integer N:

function enterLength(){

    let length = prompt("Length: ");

    constructMatrix(Number(length));

}

function constructMatrix(length){

    let index = length;
    let displayedNumber = 1;

    for(let row = 0; row < length; row++){

        for(let col = 0; col < length - index; col++){

            console.log(displayedNumber, " ");
            index++;
        }

        console.log("\n");
        displayedNumber++;
    }
}

enterLength();
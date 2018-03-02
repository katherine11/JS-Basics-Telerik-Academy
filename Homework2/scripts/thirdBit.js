function enterNumber(){

    let numberArr = prompt("Enter a number: ");
    solve(numberArr);

}

function solve(args) {

    console.log("Unsigned integer binary: ", (args >>> 0).toString(2));

    if(args !== null){

        //convert number to unsigned integer
        console.log((args).toString(2));
        let binaryNumber = (args >> 0).toString(2);
        let thirdBit = (args >> 3).toString(2);

        console.log("Shift args: ", thirdBit.toString(2));
        console.log("Shift unsigned int", (binaryNumber >> 3).toString(2));

        console.log("Third bit value: ", (thirdBit & 1).toString(2));
    }

}

enterNumber();
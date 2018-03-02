//check for a prime number

function enterNumber(){

    let number = prompt("Enter number: ");
    checkPrime(number);

}

function checkPrime(number){

    //if number is not 2 and is divided by 2 -> not a prime number;
    if(number >= 0 && number <= 100){

        console.log("Left shift: ", number << 1);
        console.log("Decimal Result: ", (number << 1 & 1).toString(2));
        console.log("Right shift: ", number >> 1);
        console.log("Decimal Result: ", (number >> 1).toString(2));

    }



}

enterNumber();
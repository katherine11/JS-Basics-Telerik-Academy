function enterNumber(){

    let numberArr = [];
    let number = prompt("Enter a number: ");

    numberArr.push(number);
    divisibleBySevenAndFive(numberArr);

}

function divisibleBySevenAndFive(args){

    if(Number(args[0]) !== null){

        let number = Number(args[0]);

        if(number % 7 === 0 && number % 5 === 0){
            let divisible = number;
            console.log(divisible);
            console.log("true", number);
        }
        else{
            console.log("false", number);
        }
    }
}

enterNumber();
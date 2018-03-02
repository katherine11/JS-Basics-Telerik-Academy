function enterNumber(){

    let numberArr = [];
    let number = prompt("Enter a number: ");

    numberArr.push(number);

    console.log(numberArr);
    console.log(typeof numberArr);
    console.log(number == Number);

    solve(numberArr);

}

function solve(args){

    console.log(Number(args[0]) === '2');
    console.log(typeof Number(adsfgsfsfsf));
    console.log(typeof Number('16'));

    if(Number(args[0]) !== null){
        let number = Number(args[0]);

        if(number > -30 && number < 30){
            if(number % 2 === 0){
                console.log("even ", number);
            }
            else{
                console.log("odd ", number);
            }
        }
    }

}

enterNumber();
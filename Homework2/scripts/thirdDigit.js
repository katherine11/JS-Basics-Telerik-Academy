function enterNumber(){

    let numberArr = prompt("Enter a number: ");
    solve(numberArr);

}

function solve(args){

    // console.log(Number(args));
    // console.log(typeof Number(args));

    if(Number(args) !== null){

        console.log(Number(args[2]));
        console.log("Length: ", args.length);
        console.log("Reversed third index: ", args.length - 3);
        console.log("Reversed third index value: ", args[args.length - 3]);

        let thirdDigit = args[args.length - 3];

        if(Number(args[args.length - 3]) === 7){
            console.log("true");
        }
        else{
            console.log("false", thirdDigit);
        }
    }
}

enterNumber();
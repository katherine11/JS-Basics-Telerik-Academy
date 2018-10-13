//sort three numbers in descending order
function enterNumbers(){

    let a = prompt("a: ");
    let b = prompt("b: ");
    let c = prompt("c: ");

    sortDesc(a, b, c);
}

function sortDesc(a, b, c) {

    let aN = Number(a);
    let bN = Number(b);
    let cN = Number(c);

    if(aN < bN){

        if(bN < cN){
            console.log(cN);
        }
        else{
            if(aN < bN){
                console.log(bN);
            }
            else{
                console.log(aN);
            }
        }
    }
    else{
        if(bN > cN){
            console.log(bN);
        }
        else{
            console.log(cN);
        }
    }
}

enterNumbers();
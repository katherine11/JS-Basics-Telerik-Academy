//selection sort:

function enterArrayOfNumbers(){

    let length;
    do {
        length = prompt("Array Length: ");
    }
    while(length < 1 || length > 1024);

    let numbers = [];

    for(let index = 0; index < length; index++){

        let strValue = prompt("Enter number: ");
        numbers[index] = Number(strValue);
    }

    selectionSort(numbers);
}


function selectionSort(numbers){

    let minNumberIndex;

    // debugger;

    for(let ind1 = 0; ind1 < numbers.length - 1; ind1++){

        minNumberIndex = ind1;

        for(let ind2 = ind1 + 1; ind2 < numbers.length; ind2++){

            if(numbers[ind2] < numbers[minNumberIndex]) {
                minNumberIndex = ind2;
            }
        }

        //put the min number in the beggining;
        let tmp = numbers[ind1];
        numbers[ind1] = numbers[minNumberIndex];
        numbers[minNumberIndex] = tmp;
    }

    console.log("Sorted: ", numbers);
}

enterArrayOfNumbers();
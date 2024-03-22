function detectOutlierValue(string) {
    // your code here
    let words = string.split(' ');
    let numbers = words.map(element => parseInt(element))
    let pares = 0;
    let impares = 0;
    let indexPar = 0;
    let indexImpar = 0;
    numbers.forEach((number, index) => {
        if (number % 2 == 1) {
            impares ++;
            indexImpar = index + 1;
        } else {
            pares ++;
            indexPar = index + 1;
        }
    });
    
    if (pares === 1) {
        return indexPar;
    } else if (impares === 1) {
        return indexImpar;
    // } else {
    //     // En caso de que no se encuentre un valor aislado, devolver -1
    //     return -1;
    }
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // --> 3 


// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  // --> 2

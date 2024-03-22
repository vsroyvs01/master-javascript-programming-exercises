function modulo(num1, num2) {
    // your code here
    if (num1 > 0) {
        let result = Math.floor(num1/num2);
        return num1 - result*num2;
    } else {
        let result = Math.floor(Math.abs(num1)/num2)* (-1);
        return num1 - result*num2;
    }
}

let output = modulo(-25, 4);
console.log(output); // --> 1

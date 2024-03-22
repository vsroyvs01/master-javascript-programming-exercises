function multiply(num1, num2) {
    // your code here
    let result = 0;
    if (num1 == 0 || num2 == 0) {
        return 0;
    } else {
        for (let i = 0; i < Math.abs(num2); i++) {
            result += Math.abs(num1);
        };
        if (num1 < 0 && num2 < 0) {
            return result;
        } else if (num1 < 0 || num2 < 0) {
            result = -result;
            return result;
        } else {
            return result;
        }
    }
    
}

let output = multiply(4, 7);
console.log(output); // --> 28

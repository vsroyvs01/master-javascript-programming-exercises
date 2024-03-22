function isEvenWithoutModulo(num) {
    // your code here
    return !((num & 1) === 1);
}

let output = isEvenWithoutModulo(8);
console.log(output); // --> true

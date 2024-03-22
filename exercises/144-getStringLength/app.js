function getStringLength(string) {
    // your code here
    let acc = 0;
    for (const i of string) {
        acc += 1;
    }
    return acc;
}

let output = getStringLength('hello');
console.log(output); // --> 5

function getAllLetters(str) {
    // your code here
    let arr = [];
    for (let index = 0; index < str.length; index++) {
        arr.push(str[index]);
    }
    return arr;
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']

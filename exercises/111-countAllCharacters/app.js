// Write your function here
function countAllCharacters(str) {
    let newObj = {};
    for (let index = 0; index < str.length; index++) {
        if (newObj[str[index]]) {
            newObj[str[index]] += 1;
        } else {
            newObj[str[index]] = 1;
        }
    }
    return newObj;
}
let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}
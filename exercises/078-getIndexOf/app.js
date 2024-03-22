// Write your function here
function getIndexOf(c, str) {
    let position = []
    for (let index = 0; index < str.length; index++) {
        if (str[index] === c) {
            return index;
        }
    }
    return -1;
}
let output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2
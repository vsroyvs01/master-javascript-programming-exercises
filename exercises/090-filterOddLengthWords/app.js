function filterOddLengthWords(words) {
    // your code here
    let newArray = words.filter((word) => word.length % 2 == 1);
    return newArray;
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', 'now']

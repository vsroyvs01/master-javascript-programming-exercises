function filterEvenLengthWords(words) {
    // your code here
    let newArray = words.filter((word) => word.length % 2 == 0);
    return newArray;
}

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']
